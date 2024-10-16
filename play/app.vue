<!--
 * @Author: maoxuena
 * @Date: 2024-10-12 09:54:17
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-10-16 13:56:27
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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const iconColor=ref('#da0a4d')
const iconSize = ref(20)

</script>

<style lang="scss" scoped>
.section-wrap {
  display: flex;
  flex-wrap: wrap;
}

</style>