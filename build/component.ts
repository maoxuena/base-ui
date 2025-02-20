/**
 * 安装依赖 pnpm install fast-glob -w -D
 */
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import { series, parallel } from "gulp";
import { sync } from "fast-glob"; // 同步查找文件
import { compRoot, outDir, projectRoot } from "./utils/paths";
import path from "path";
import { rollup, OutputOptions } from "rollup";
import { buildConfig } from "./utils/config";
import { pathRewriter, run } from "./utils";
import { Project, SourceFile } from "ts-morph";
import glob from "fast-glob";
import * as VueCompiler from "@vue/compiler-sfc";
import fs from "fs/promises";

const buildEachComponent = async () => {
  // 打包每个组件
  // 查找components下所有的组件目录 ["icon"]
  const files = sync("*", {
    cwd: compRoot,
    onlyDirectories: true, // 只查找文件夹
  });

  // 分别把components文件夹下的组件，放到dist/es/components下 和 dist/lib/components
  const builds = files.map(async (file: string) => {
    console.log('分别把components文件夹下的组件', file)
    // 找到每个组件的入口文件 index.ts
    const input = path.resolve(compRoot, file, "index.ts");
    const config = {
      input,
      plugins: [nodeResolve(), typescript(), vue(), commonjs()],
      external: (id) => /^vue/.test(id) || /^@base-ui/.test(id), // 排除掉vue和@base-ui的依赖
    };
    const bundle = await rollup(config);
    const options = Object.values(buildConfig).map((config) => ({
      format: config.format,
      file: path.resolve(config.output.path, `components/${file}/index.js`),
      paths: pathRewriter(config.output.name), // @base-ui => base-ui/es base-ui/lib  处理路径
      exports: "named",
    }));

    await Promise.all(
      options.map((option) => bundle.write(option as OutputOptions))
    );
  });

  return Promise.all(builds);
};

async function genTypes() {
  const project = new Project({
    // 生成.d.ts 需要有一个tsconfig
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      outDir: path.resolve(outDir, "types"),
      baseUrl: projectRoot,
      paths: {
        "@base-ui/*": ["packages/*"],
      },
      skipLibCheck: true,
      strict: false,
    },
    tsConfigFilePath: path.resolve(projectRoot, "tsconfig.json"),
    skipAddingFilesFromTsConfig: true,
  });

  // ** 任意目录下 * 任意文件
  const filePaths = await glob("**/*", {
    cwd: compRoot,
    onlyFiles: true,
    absolute: true,
  });

  const sourceFiles: SourceFile[] = [];
  await Promise.all(
    filePaths.map(async function (file) {
      if (file.endsWith(".vue")) {
        const content = await fs.readFile(file, "utf8");
        const sfc = VueCompiler.parse(content);
        const { script } = sfc.descriptor;
        if (script) {
          let content = script.content; // 拿到脚本  icon.vue.ts  => icon.vue.d.ts
          const sourceFile = project.createSourceFile(file + ".ts", content);
          sourceFiles.push(sourceFile);
        }
      } else {
        const sourceFile = project.addSourceFileAtPath(file); // 把所有ts文件都转换为.d.ts文件
        sourceFiles.push(sourceFile);
      }
    })
  );

  await project.emit({
    // 默认是放在内存中，
    emitOnlyDtsFiles: true,
  });

  // 参考 ts-morph文档
  const tasks = sourceFiles.map(async (sourceFile: any) => {
    const emitOutput = sourceFile.getEmitOutput();
    const tasks = emitOutput.getOutputFiles().map(async (outputFile: any) => {
      const filepath = outputFile.getFilePath();
      await fs.mkdir(path.dirname(filepath), {
        recursive: true,
      });
      // @base-ui -> base-ui/es -> .d.ts 肯定不用去lib下查找
      await fs.writeFile(filepath, pathRewriter("es")(outputFile.getText()));
    });
    await Promise.all(tasks);
  });

  await Promise.all(tasks);
}

function copyTypes() {
  const src = path.resolve(outDir, "types/components/");
  const copy = (module) => {
    let output = path.resolve(outDir, module, "components");
    return () => run(`cp -r ${src}/* ${output}`);
  };
  return parallel(copy("es"), copy("lib"));
}

async function buildComponentEntry() {
    const config = {
        input: path.resolve(compRoot, "index.ts"),
        plugins: [typescript()],
        external: () => true,
    };
    const bundle = await rollup(config);
    return Promise.all(
        Object.values(buildConfig)
            .map((config) => ({
                format: config.format,
                file: path.resolve(config.output.path, "components/index.js"),
            }))
            .map((config) => bundle.write(config as OutputOptions))
    );
}

export const buildComponent = series(buildEachComponent, genTypes, copyTypes(),buildComponentEntry);
