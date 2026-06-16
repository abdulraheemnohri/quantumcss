<template>
  <div
    :class="['q-card', customClass, shadow ? 'q-card-shadow' : '', theme ? 'q-theme-' + theme : '']"
    @click="$emit('click')"
  >
    <div v-if="title || $slots.header" class="q-card-header">
      <slot name="header">{{ title }}</slot>
    </div>
    <div class="q-card-body">
      <slot>{{ content }}</slot>
    </div>
    <div v-if="$slots.footer" class="q-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: { type: String, default: '' },
    content: { type: String, default: '' },
    shadow: { type: Boolean, default: false },
    customClass: { type: String, default: '' },
    clickable: { type: Boolean, default: false },
    theme: { type: String, default: '' }
  }
};
</script>
