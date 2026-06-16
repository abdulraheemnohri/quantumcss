<script setup lang="ts">
/**
 * QuantumCSS Badge for Vue 3
 */
withDefaults(defineProps<{
  variant?: 'primary' | 'success' | 'warning' | 'danger';
}>(), {
  variant: 'primary'
});
</script>

<template>
  <span class="q-badge" :class="`q-badge-${variant}`">
    <slot />
  </span>
</template>

<style scoped>
@import 'quantumcss/dist/components/badge.css';
</style>
