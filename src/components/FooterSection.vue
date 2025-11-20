<template>
  <footer class="site-footer">
    <div class="container">
        <p class="copyright">© 2025 Ahn Taemin</p>
        <!-- Social links intentionally moved to About Me section on the homepage -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--card-border);
  background: var(--hf-bg);
  margin-top: 40px;
  height: var(--hf-height);
}
.site-footer .container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  height: 100%;
}
.copyright { margin: 0; color: var(--muted); font-size: 14px; }
</style>
