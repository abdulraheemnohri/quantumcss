<template>
  <div class="q-dashboard">
    <h1 class="dashboard-title">Dashboard</h1>
    <aside class="q-sidebar">Menu</aside>
    <main>
      <div class="card" v-for="i in 3" :key="i" @click="goToRoute('/expected-route')">Stat {{ i }}</div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      currentRoute: { path: '/dashboard' }
    };
  },
  computed: {
    $route() {
      return this.currentRoute;
    }
  },
  methods: {
    goToRoute(path) {
      this.currentRoute.path = path;
      this.$emit('navigate', path);
    }
  }
};
</script>
