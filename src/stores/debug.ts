import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDebugStore = defineStore('debug', () => {
  const debug = ref(false)

  const toggle = () => {
    debug.value = !debug.value
  }

  return { debug, toggle }
})
