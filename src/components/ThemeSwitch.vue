<template>
  <div class="q-theme-switch">
    <input
      type="checkbox"
      role="switch"
      :checked="theme === 'dark'"
      @change="toggleTheme"
    />
  </div>
</template>

<script>
export default {
  name: 'ThemeSwitch',
  props: {
    theme: { type: String, default: 'light' }
  },
  methods: {
    toggleTheme(event) {
      const newTheme = event.target.checked ? 'dark' : 'light';
      localStorage.setItem('theme-preference', newTheme);
      this.$emit('update:theme', newTheme);
    }
  }
};
</script>
