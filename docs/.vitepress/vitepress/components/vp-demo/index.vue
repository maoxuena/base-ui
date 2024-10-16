<template>
  <ClientOnly>
    <p text="sm" v-html="decodedDescription" />
    <div class="example">
      <Example :path="path" />
      <ElDivider class="m-0" />
      <div class="op-btns">
        <ElTooltip content="复制代码" :show-arrow="false">
          <ElIcon :size="16" class="op-btn" @click="copyCode">
            <CopyDocument />
          </ElIcon>
        </ElTooltip>
        <ElTooltip content="查看源代码" :show-arrow="false">
          <ElIcon :size="16" class="op-btn" @click="toggleSourceVisible()">
            <View />
          </ElIcon>
        </ElTooltip>
      </div>
      <ElCollapseTransition>
        <SourceCode v-show="sourceVisible" :source="source" />
      </ElCollapseTransition>
      <Transition name="el-fade-in-linear">
        <div
          v-show="sourceVisible"
          class="example-float-control"
          @click="toggleSourceVisible(false)"
        >
          <ElIcon :size="16">
            <CaretTop />
          </ElIcon>
          <span>隐藏源代码</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { ElMessage } from 'element-plus'
import { useClipboard, useToggle } from '@vueuse/core'
import { CaretTop, View, CopyDocument } from '@element-plus/icons-vue'

import Example from './vp-example.vue'
import SourceCode from './vp-source-code.vue'

const props = defineProps<{
  rawSource: string // 源码
  source: string
  path: string
  description?: string
}>()

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
})

const [sourceVisible, toggleSourceVisible] = useToggle(false)

const decodedDescription = computed(() =>
  decodeURIComponent(props.description!)
)

const copyCode = async () => {
  if (!isSupported) {
    ElMessage.error('复制失败')
  }
  try {
    await copy()
    ElMessage.success('已复制')
  } catch (e: any) {
    ElMessage.error(e.message)
  }
}
</script>
<style lang="scss" scoped>
.example {
  border: 1px solid var(--border-color);
  border-radius: var(--el-border-radius-base);
  .m-0 {
    margin: 0;
  }
  .op-btns {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: .5rem;
    height: 2.5rem;
    .el-icon {
      &:hover {
        color: var(--text-color);
      }
    }
    .op-btn {
      margin: 0 .5rem;
      color: var(--text-color-lighter);
      transition: .2s;
      cursor: pointer;
      &.github a {
        color: var(--text-color-lighter);
        transition: .2s;
        &:hover {
          color: var(--text-color);
        }
      }
    }
  }
  &-float-control {
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    margin-top: -1px;
    box-sizing: border-box;
    border-top: 1px solid var(--border-color);
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    height: 44px;
    color: var(--el-text-color-secondary);
    background-color: var(--bg-color, #fff);
    cursor: pointer;
    span {
      margin-left: 10px;
      font-size: 14px;
    }
    &:hover {
      color: var(--el-color-primary);
    }
  }
}

</style>
