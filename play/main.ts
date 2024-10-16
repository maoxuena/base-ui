/*
 * @Author: maoxuena
 * @Date: 2024-10-12 09:55:11
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-16 14:10:55
 * @FilePath: \base-ui\play\main.ts
 * @Description: 
 */
import { createApp } from 'vue'
import App from './app.vue'
import {BIcon, BButton} from '@base-ui/components'
import '@base-ui/theme-chalk/src/index.scss'

const app = createApp(App)
app.use(BIcon).use(BButton).mount('#app')
