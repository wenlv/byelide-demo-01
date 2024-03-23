<template>
  <div class="about" :class="{ debug: editStore.debug }" @click="editStore.toggle">
    <div>
      <AppLeftPanel />
    </div>
  </div>
</template>

<script type="ts" setup>
import {useDebugStore} from "../stores/debug";
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue'

const editStore=useDebugStore();
</script>

<style>
@media (width >= 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .debug {
    border: 2px dashed #afafaf;
  }
}
</style>
