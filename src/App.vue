<script setup>

</script>

<template>
  <!-- 一级路由出口组件 -->
   <RouterView />
   <div class="test">
    test
   </div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
<style lang="scss">
  @import '@/styles/var.scss';
  .test{
    color:$xtxColor;
  }
</style>

