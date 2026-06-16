<template>
  <div v-show="modelValue" :class="['q-modal', { 'q-modal-open': modelValue }]" @click.self="close" @keydown.esc="close">
    <div class="q-modal-content" tabindex="0">
      <slot></slot>
      <button class="q-btn q-btn-text" @click="close">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    modelValue: { type: Boolean, default: false }
  },
  watch: {
    modelValue: {
      immediate: true,
      handler(val) {
        if (typeof document !== 'undefined') {
          if (val) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = '';
          }
        }
      }
    }
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false);
    }
  },
  beforeDestroy() {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }
};
</script>
