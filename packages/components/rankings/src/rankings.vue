<template>
  <div class="b-rank-wrap">
    <div class="b-rank-title">
      <i class="b-rank-title-icon"/> 
      <h2>排行面板</h2>
      <span class="b-rank-dot">
        <i style="--index:200ms" />
        <i style="--index:400ms" />
        <i style="--index:600ms" />
        <i style="--index:800ms" />
      </span>
    </div>
    <div class="b-rank-list">
      <div class="b-rank-row b-rank-style1" v-for="(i,index) in list" :key="index">
        <span class="b-rank-icon">
          {{ i.ranking }}
        </span> 
        <span class="b-rank-info">
          {{ i.label }}
        </span> 
        <span class="b-rank-value">
          {{ i.value }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { rankingsProps } from './rankings'
defineOptions({
  name: 'BRankings',
})

const props = defineProps(rankingsProps)
</script>

<style lang="scss" scoped>
</style>