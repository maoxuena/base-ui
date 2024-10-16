/*
 * @Author: maoxuena
 * @Date: 2024-10-12 10:38:49
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-16 11:01:40
 * @FilePath: \base-ui\packages\components\icon\src\icon.ts
 * @Description: 
 */
// 这里放组件的 props 及公共方法
import type { ExtractPropTypes } from 'vue' 
import type Icon from './icon.vue'

export const iconProps = {
  size:{
    type: Number
  },
  color:{
    type: String,
    default: '#1e80ff',
  }
} as const

export type IconProps = ExtractPropTypes<typeof iconProps>
export type IconInstance = InstanceType<typeof Icon>