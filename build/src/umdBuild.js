import { rollup } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import vue from "@vitejs/plugin-vue";
import esbuild from 'rollup-plugin-esbuild';

const umdBuildEntry = async () => {
    const writeBundles = await rollup({
        input: "",
        plugins: [
            vue(),
            nodeResolve(),
            esbuild()
        ],
        external: ['vue'],  // 排除不尽兴打包的 npm 包
    });
    // 配置输出文件格式，属性为 output
    writeBundles.write({
        
    })
}

umdBuildEntry();