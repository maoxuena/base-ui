<!--
 * @Author: maoxuena
 * @Date: 2024-10-12 09:54:17
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-29 16:13:20
 * @FilePath: \base-ui\play\app.vue
 * @Description: 
-->
<template>
  <div>
    <p>icon测试</p>    
    <section class="section-wrap">
      <b-icon :color="iconColor" :size="iconSize" class="b-icon-error" />
      <b-icon :color="iconColor" :size="iconSize" class="b-icon-error-fill" />
      <b-icon :color="iconColor" :size="iconSize" class="b-icon-delete" />
      <b-icon :color="iconColor" :size="iconSize" class="b-icon-delete-fill" />
      <b-icon :color="iconColor" :size="iconSize" class="b-icon-collect" />
      <b-icon :color="iconColor" :size="iconSize" class="b-icon-collect-fill" />
      <b-icon :color="iconColor" :size="iconSize" class="b-icon-forward" />
      <b-icon :color="iconColor" :size="iconSize" class="b-icon-forward-fill" />
      <b-icon :color="iconColor" :size="iconSize" class="b-icon-info" />
      <b-icon :color="iconColor" :size="iconSize" class="b-icon-info-fill" />
    </section>
    <p>button测试</p>    
    <section class="section-wrap">
      <b-button size="large" type="primary">large primary 按钮</b-button>
      <b-button size="small" type="success">small success 按钮</b-button>
      <b-button type="warning">default warning 按钮</b-button>
    </section>
    <p>Rankings</p>
    <section>
      <b-rankings :list="rList"></b-rankings>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const iconColor=ref('#da0a4d')
const iconSize = ref(20)

const rList = ref([
  {
    ranking:'01',
    label:'数据可视化平台样式01',
    value:'180,000.00', 
  },{
    ranking:'02',
    label:'数据可视化平台样式02',
    value:'157,000.00', 
  },{
    ranking:'03',
    label:'数据可视化平台样式03',
    value:'146,000.00', 
  },{
    ranking:'04',
    label:'数据可视化平台样式04',
    value:'126,000.00', 
  },{
    ranking:'05',
    label:'数据可视化平台样式05',
    value:'118,000.00', 
  }
])

</script>

<style lang="scss" scoped>
.section-wrap {
  display: flex;
  flex-wrap: wrap;
}

</style>