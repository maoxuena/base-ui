/*
 * @Author: maoxuena
 * @Date: 2024-10-12 09:55:11
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-29 16:25:12
 * @FilePath: \base-ui\play\main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import App from './app.vue'
import {BIcon, BButton, BRankings} from '@base-ui/components'
import '@base-ui/theme-chalk/src/index.scss'

const app = createApp(App)
app.use(BIcon).use(BButton).use(BRankings).mount('#app')