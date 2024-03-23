<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigator from '@/components/AppNavigator.vue'
</script>

<template>
  <AppNavigator msg="hello" />
  <RouterView />
</template>

<style scoped>
.tabs {
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.tab-active {
  background-color: pink;
}
</style>
