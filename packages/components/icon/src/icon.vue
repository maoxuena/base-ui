<template>
  <i class="b-icon" :style="style">
    <slot></slot>
  </i>
</template>

<script setup>
import { computed } from 'vue'
import { iconProps } from './icon'

defineOptions({
  name: 'BIcon',
})

const props = defineProps(iconProps)

const style = computed(() => {
  if(!props.size && !props.color){
    return {}
  }
  return {
    ...(props.size ? { 'font-size':props.size + 'px'} : {}),
    ...(props.color ? { 'color':props.color} : {}),
  }
})
</script>

<style lang="scss" scoped>
</style>