<template>
  <div :class="['q-card', customClass, { 'q-card-shadow': shadow }]">
    <div v-if="title" class="q-card-header">{{ title }}</div>
    <div class="q-card-body">
      <template v-if="content">{{ content }}</template>
      <slot v-else />
    </div>
    <div v-if="$slots.footer" class="q-card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'QCard',
  props: {
    title: String,
    content: String,
    shadow: {
      type: Boolean,
      default: true
    },
    customClass: String
  }
}
</script>
