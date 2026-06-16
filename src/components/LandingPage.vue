<template>
  <div class="q-landing-page">
    <nav class="q-navbar">Logo</nav>
    <section class="q-hero">
      <h1 class="q-title">Welcome to QuantumCSS</h1>
      <button class="q-btn q-cta" @click="$emit('ctaClicked')">Get Started</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
};
</script>
