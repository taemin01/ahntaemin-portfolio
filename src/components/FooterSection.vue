<template>
  <footer class="site-footer">
    <div class="container">
      <p class="copyright">© 2025 An Taemin</p>
      <ul class="social">
        <li><a href="#">GitHub</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Email</a></li>
      </ul>
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
  justify-content: space-between;
  padding: 0 24px;
  height: 100%;
}
.social { list-style: none; margin: 0; padding: 0; }
.social li { display: inline-block; margin-left: 12px; }
.social a { color: var(--muted); text-decoration: none; font-size: 14px; }
.copyright { margin: 0; color: var(--muted); font-size: 14px; }
</style>
