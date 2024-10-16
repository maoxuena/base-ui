import type { Component } from 'vue'
import VPDemo from './components/vp-demo/index.vue'
import './style/css-vars.scss'
import './style/index.scss'

// 引入： import { VPDemo } from '../vitepress/index'
// 注册： app.component('Demo', VPDemo)
// export { VPDemo }
export const globals: [string, Component][] = [
  ['Demo', VPDemo]
]