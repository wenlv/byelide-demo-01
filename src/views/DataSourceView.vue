<template>
  <div class="about">
    <h1>DataSource{{ store.count }}-{{ store.double }}</h1>
    <button @click="store.increment">+</button>
    <button @click="store.decrement">-</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()
</script>

<style>
@media (width >= 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
