<template>
  <div class="q-theme-switch">
    <label class="q-switch">
      <input
        type="checkbox"
        role="switch"
        :checked="theme === 'dark'"
        @change="toggleTheme"
      >
      <span class="q-switch-slider"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'QThemeSwitch',
  props: {
    theme: {
      type: String,
      default: 'light'
    }
  },
  methods: {
    toggleTheme(event) {
      const newTheme = event.target.checked ? 'dark' : 'light';
      localStorage.setItem('theme-preference', newTheme);
      this.$emit('update:theme', newTheme);
    }
  }
}
</script>
