/*
 * @Author: maoxuena
 * @Date: 2024-10-12 09:55:11
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-12 13:30:45
 * @FilePath: \base-ui\play\main.ts
 * @Description: 
 */
import { createApp } from "vue"
import App from './app.vue'
import { BIcon } from "@base-ui/components/icon"
import '@base-ui/theme-chalk/src/index.scss'

const app = createApp(App);
app.use(BIcon).mount('#app')
