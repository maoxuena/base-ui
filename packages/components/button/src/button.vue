<template>
  <button
    class="b-btn"
    :class="className"
  >
    <span><slot></slot></span>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { buttonProps } from './button'

defineOptions({
  name: 'BButton',
})

const props = defineProps(buttonProps)

const className = computed(() => {
  if(!props.size && !props.type){
    return ''
  }
  return `b-btn-${props.size} b-btn-${props.type}`
})

</script>

<style scoped>

</style>