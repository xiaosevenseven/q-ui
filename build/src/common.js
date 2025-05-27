

// 输出包的目录
const outputPkgDir = "q-ui";

import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

export const filePath = fileURLToPath(import.meta.url);
export const dirName = dirname(filePath);
export const rootDir = resolve(dirName, "../", "..");   // 组件库根目录
export const pkgRoot = resolve(rootDir, "packages");  // 组件包根目录
export const outputDir = resolve(rootDir, outputPkgDir);
export const outputEsm = resolve(rootDir, outputPkgDir, "es")  // esm 目录
export const outputCjs = resolve(rootDir, outputPkgDir, "lib")  // lib 目录
export const outputUmd = resolve(rootDir, outputPkgDir, "dist")  // umd 目录

