import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Q-UI",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: "/guide/" },
      { text: '组件', link: '/components/icon', activeMatch: "/component/" }
    ],

    sidebar: {
      "/guide/": [
          {
            text: '指南',
            items: [
              { text: '安装', link: '/guide/installation' },
              { text: '快速上手', link: '/guide/quickStart' },
              { text: '更新日志', link: '/guide/changelog' },
            ]
          }
      ],
      "/components/": [
        {
          text: '基础组件',
          items: [
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'Checkbox 复选框', link: '/components/checkbox' },
            { text: 'Radio单选框', link: '/components/radio' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
