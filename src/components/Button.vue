<template>
  <button
    :class="classes"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    outline: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return {
        'q-btn': true,
        'q-btn-primary': this.primary,
        'q-btn-secondary': this.secondary,
        'q-btn-outline': this.outline,
        'q-btn-loading': this.loading
      };
    }
  }
};
</script>
