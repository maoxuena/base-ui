import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from "vitepress/theme"
import {BIcon, BButton} from "@base-ui/components"
import "@base-ui/theme-chalk/src/index.scss"
import { globals } from '../vitepress'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 全局样式
import './style.scss'

export default {
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props)
  },
  enhanceApp: async ({ app, router, siteData }) => {
    app.use(BIcon)
    app.use(BButton)
    app.use(ElementPlus)
    // 全局引入vp-demo组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
}