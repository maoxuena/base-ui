/*
 * @Author: maoxuena
 * @Date: 2024-10-12 13:54:06
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-18 14:48:18
 * @FilePath: \base-ui\build\utils\paths.ts
 * @Description: 
 */
import path from "path"

// 项目根目录
export const projectRoot = path.resolve(__dirname,'../../')

// 打包输出目录
export const outDir = path.resolve(__dirname,'../../dist')

// base-ui 入口 index.ts
export const wpRoot = path.resolve(__dirname,'../../packages/base-ui')

// 组件目录
export const compRoot = path.resolve(projectRoot,'packages/components')