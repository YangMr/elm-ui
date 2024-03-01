<template>
  <el-menu
    default-active="2"
    :collapse="collapse"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon><el-icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><el-icon-menu /></el-icon>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><el-icon-menu /></el-icon>
      <span>省市区选择器</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
// 接受父组件传递的值
defineProps<{
  collapse: boolean;
}>();
</script>

<style scoped lang="scss">
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
