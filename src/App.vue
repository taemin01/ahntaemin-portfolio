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
  /* Colors: tuned for clearer contrast and readability */
  --page-bg: #f4f6f8; /* soft neutral background */
  --ui-bg: #ffffff;   /* white content panels */
  --text: #0b1b2b;    /* darker primary text for better contrast */
  --muted: #334155;   /* darker secondary text for improved readability */
  --primary: #1f6feb; /* crisp blue primary for links/buttons */
  --accent: #2fb38b;  /* green accent left as-is */
  --hero-bg: #eaf6f5; /* restored pale aqua hero background (previous look) */
  --card-border: #e6eefc;
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
  /* Use a modern system font stack with Korean fallback for mejor readability */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Apple SD Gothic Neo", "Noto Sans KR", "Noto Sans", "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: var(--text);
  margin-top: 0;
  background: var(--page-bg);
  min-height: 100vh;
  line-height: 1.6;
}

/* Base typography for consistent, readable headings and content */
h1, h2, h3, h4, h5 {
  color: var(--text);
  margin: 0 0 12px 0;
  line-height: 1.2;
}

h1 { font-size: 30px; font-weight: 700; }
h2 { font-size: 22px; font-weight: 700; }
h3 { font-size: 18px; font-weight: 600; }
h4 { font-size: 16px; font-weight: 600; }

p, li, dd { color: var(--muted); font-weight: 400; font-size: 15px; }

a { color: var(--primary); text-decoration: none; }
a:hover, a:focus { text-decoration: underline; }

/* Ensure buttons/primary actions remain prominent */
.btn { color: #fff; }
.btn.primary { background: var(--primary); }

/* Make container text align left by default for readability */
.container { max-width: 1200px; margin: 0 auto; padding: 0 24px; text-align: left; }
</style>
