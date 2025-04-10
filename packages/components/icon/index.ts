/**
 * 用来整合组件，最终实现导出组件
 */

import _Icon from "./src/icon.vue";
import {withInstall} from "@q-ui/utils";


const Icon = withInstall(_Icon);

// 可以通过 app.use 来使用，也可以通过 import 方式按需引入
export default Icon;

export * from "./src/icon";


declare module 'vue' {
    export interface GlobalComponents {
        QIcon: typeof Icon
    }
}