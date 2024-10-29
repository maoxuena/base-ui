/*
 * @Author: maoxuena
 * @Date: 2024-10-29 13:15:01
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-29 13:17:34
 * @FilePath: \base-ui\packages\components\rankings\src\rankings.ts
 * @Description: 
 */
import type { ExtractPropTypes } from 'vue' 
import type Rankings from './rankings.vue'

export const rankingsProps = {
  list:{
    type: Array,
    default: ()=>[],
  }
} as const

export type RankingsProps = ExtractPropTypes<typeof rankingsProps>
export type RankingsInstance = InstanceType<typeof Rankings>