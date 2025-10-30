<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from './components/HeaderSection.vue'
import Footer from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
:root{
  --page-bg: #f6f9f8; /* overall page background (pale) */
  --ui-bg: #ffffff;   /* white content panels */
  --muted: #6b7280;   /* muted text */
  --text: #0f172a;    /* primary text */
  --primary: #54b2a9; /* main teal button */
  --accent: #2fb38b;  /* skill/green accent */
  --hero-bg: #eaf6f5; /* solid pale aqua so the right side doesn't turn white */
  --card-border: #edf2f1;
  --hf-vertical-padding: 24px;
  --hf-bg: var(--ui-bg);
  --hf-height: 56px;
}

html, body {
  height: 100%;
  margin: 0;
  background: var(--page-bg);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  margin-top: 0;
  /* Make the page background match header/footer so no white strip shows */
  background: var(--page-bg);
  min-height: 100vh;
}
</style>
