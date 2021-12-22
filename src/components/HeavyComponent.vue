<template>
  <label>
    T
  </label>
</template>

<script lang="ts">
export default {
  name: 'HeavyComponent',
  unmounted (): void {
    console.log('unmounted HeavyComponent')
  },
  beforeUnmounted (): void {
    console.log('unmounted HeavyComponent')
  }
}
</script>
