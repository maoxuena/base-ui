/*
 * @Author: maoxuena
 * @Date: 2024-10-12 10:38:56
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-12 11:16:28
 * @FilePath: \base-ui\packages\components\icon\index.ts
 * @Description:
 */
import { withInstall } from '@base-ui/utils'
import Icon from './src/icon.vue'

const BIcon = withInstall(Icon)

export{
    BIcon
}
export default BIcon
export * from './src/icon'