/**
 * 用来整合组件，最终实现导出组件
 */

import _Tree from "./src/tree.vue";
import {withInstall} from "@q-ui/utils";


const Tree = withInstall(_Tree);

// 可以通过 app.use 来使用，也可以通过 import 方式按需引入
export default Tree;

export * from "./src/tree";


declare module 'vue' {
    export interface GlobalComponents {
        QTree: typeof Tree
    }
}