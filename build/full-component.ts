/**
 * 安装依赖 pnpm install rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-typescript2 rollup-plugin-vue -D -w
 */
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import { parallel } from "gulp";
import path from "path";
import { outDir, wpRoot } from "./utils/paths";
import { rollup, OutputOptions } from "rollup";
import fs from "fs/promises";
import { buildConfig } from "./utils/config";
import { pathRewriter } from "./utils";

const buildFull = async () => {
  // rollup 打包的配置信息
  const config = {
    input: path.resolve(wpRoot, "index.ts"), // 打包入口
    plugins: [nodeResolve(), typescript(), vue(), commonjs()],
    external: (id) => /^vue/.test(id), // 打包的时候不打包vue代码
  };

  // 组件库两种使用方式 import 导入组件库 在浏览器中使用script

  // esm umd

  const buildConfig = [
    {
      format: "umd", // 打包的格式
      file: path.resolve(outDir, "index.js"),
      name: "baseUI", // 全局变量名字
      exports: "named", // 导出的名字 用命名的方式导出 libaryTarget:"" name:""
      globals: {
        // 表示使用的vue是全局的
        vue: "Vue",
      },
    },
    {
      format: "esm",
      file: path.resolve(outDir, "index.esm.js"),
    },
  ];

  let bundle = await rollup(config);

  return Promise.all(
    buildConfig.map((config) => {
      bundle.write(config as OutputOptions);
    })
  );
};

async function buildEntry() {
  const entryFiles = await fs.readdir(wpRoot, { withFileTypes:true });
  const entryPoints = entryFiles
    .filter((f) => f.isFile())
    .filter((f) => !["package.json"].includes(f.name))
    .map((f) => path.resolve(wpRoot, f.name));

  const config = {
    input: entryPoints,
    plugins: [nodeResolve(), vue(), typescript()],
    external: (id: string) => /^vue/.test(id) || /^@base-ui/.test(id),
  };
  const bundle = await rollup(config);
  return Promise.all(
    Object.values(buildConfig)
      .map((config) => ({
        format: config.format,
        dir: config.output.path,
        paths: pathRewriter(config.output.name),
      }))
      .map((option) => bundle.write(option as OutputOptions))
  );
}

// gulp适合流程控制和代码的转义  没有打包的功能
export const buildFullComponent = parallel(buildFull,buildEntry);
