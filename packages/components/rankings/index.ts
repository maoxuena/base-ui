/*
 * @Author: maoxuena
 * @Date: 2024-10-29 13:15:07
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-29 16:08:12
 * @FilePath: \base-ui\packages\components\rankings\index.ts
 * @Description: 
 */

import { withInstall } from '@base-ui/utils'
import Rankings from './src/rankings.vue'

// 导出 install
const BRankings = withInstall(Rankings)

export {
  BRankings
}
// 导出rankings组件
export default BRankings
export * from './src/rankings'