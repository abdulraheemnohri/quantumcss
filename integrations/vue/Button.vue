<script setup lang="ts">
/**
 * QuantumCSS Button for Vue 3
 */
defineProps<{
  primary?: boolean;
  disabled?: boolean;
  small?: boolean;
}>();
</script>

<template>
  <button
    class="q-btn"
    :class="{ 'q-btn-primary': primary, 'q-btn-small': small }"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped>
@import 'quantumcss/dist/components/button.css';
</style>
