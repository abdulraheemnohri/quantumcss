<template>
  <button
    :class="classes"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'QButton',
  props: {
    primary: Boolean,
    secondary: Boolean,
    disabled: Boolean,
    loading: Boolean
  },
  computed: {
    classes() {
      return {
        'q-btn': true,
        'q-btn-primary': this.primary,
        'q-btn-secondary': this.secondary,
        'q-btn-loading': this.loading
      };
    }
  }
}
</script>
