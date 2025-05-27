import { defineConfig } from 'vitepress'
import MdContainer from "markdown-it-container"
import path from "path"
import fs from "fs"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Q-UI 组件库",
  description: "Vue3 组件库开发实战",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            { text: '设计', link: '/guide/design' },
            { text: '安装', link: '/guide/install' },
            { text: '快速开始', link: '/guide/start' }
          ]
        },
        {
          text: '进阶',
          items: [
            { text: '国际化', link: '/guide/lang' },
            { text: '主题', link: '/guide/theme' },
            { text: '暗黑模式', link: '/guide/diablo' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Checkbox 复选框', link: '/components/checkbox' },
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'Icon 图标', link: '/components/icon' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(MdContainer, "demo", {
        render(tokens: string, idx: string) {
          if (tokens[idx].nesting === 1) {
            // 获取正则捕获组中的描述内容,即::: demo xxx中的xxx
            const info = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
            const description = info && info.length > 1 ? info[1] : "";
            // 获取路径
            const nextToken = tokens[idx + 1]
            const componentPath = nextToken.type === "fence" ? nextToken.content : "";
            /**
             * 读取文件
             */
            let source = ''
            if (componentPath) {
              let file = path.resolve(__dirname, "../examples", `${componentPath}.vue`);
              file = file.replace(/\s+/g, "");
              source = fs.readFileSync(file, "utf-8");
            }
            return `<Demo path=${componentPath}>
                  <template #source><pre><code class="language-html">${md.utils.escapeHtml(source)}</code></pre></template>
                  <template #description>${description ? `${md.render(description)}` : ""}</template>
                `;
          } else {
            return `</Demo>`
          }
        },
      })
    }
  }
})
