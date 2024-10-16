import { defineConfig } from 'vitepress'
import { mdPlugin } from './configs/plugins'
import {  nav, sidebar } from './configs'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Base UI",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/maoxuena/base-ui/vitepress' }
    ],
    search: {
      provider: 'local'
    },
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      level: 'deep',
      label: '页面导航'
    },
    footer: {
      message: '仅供学习',
      copyright: '版权所有',
    },
  },
  markdown: {
    lineNumbers: true,
    theme: { light: 'github-light', dark: 'github-dark' },
    config: (md) => mdPlugin(md),
  }
})