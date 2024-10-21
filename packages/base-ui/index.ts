import { BIcon } from "@base-ui/components"
import { BButton } from "@base-ui/components"
import type { App } from "vue"

const components = [BIcon, BButton]

const install = (app: App) => {
  // 每个组件在写的时候都提供了install方法
  // 有的是组件，有的可能是指令 xxx.install = () => { app.directive() }
  components.forEach((component) => app.use(component))
}

export default {
  install
}

export * from '@base-ui/components'