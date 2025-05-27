import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import Demo from "../components/demo/index.vue";
// UI 组件库
import QUI from "q-ui";
import "@q-ui/theme/src/index.scss"

import "./custom.css";
import './highlight.scss'
import './iconfont/iconfont.css'
export default {
    extends: DefaultTheme,
    enhanceApp: ({ app, router, siteData }) => {
        app.component("Demo", Demo);
        app.use(QUI)
    },
} satisfies Theme;