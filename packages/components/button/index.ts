/*
 * @Author: maoxuena
 * @Date: 2024-10-16 11:01:54
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-18 14:12:30
 * @FilePath: \base-ui\packages\components\button\index.ts
 * @Description: 
 */
import { withInstall } from '@base-ui/utils'
import Button from './src/button.vue'

// 导出 install
const BButton = withInstall(Button)

export {
  BButton
}
// 导出button组件
export default BButton
export * from './src/button'