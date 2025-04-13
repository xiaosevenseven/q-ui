import DefaultTheme from 'vitepress/theme'


import QIcon from "@q-ui/components/icon"
console.log(QIcon)

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册自定义组件
    app.use(QIcon)
  }
};
