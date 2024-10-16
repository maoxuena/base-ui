/*
 * @Author: maoxuena
 * @Date: 2024-10-16 11:06:17
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-16 13:28:16
 * @FilePath: \base-ui\packages\components\button\src\button.ts
 * @Description: 
 */
import type { ExtractPropTypes } from 'vue' 
import type Button from './button.vue'

export const buttonSizes = {
  large: 40,
  medium: 32,
  small: 24,
} as const

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
] as const

export const buttonProps = {
  size:{
    type: String,
    values: buttonSizes,
    default: 'medium',
  },
  type: {
    type: String,
    values: buttonTypes,
    default: 'default',
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>