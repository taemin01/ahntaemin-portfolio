<template>
  <footer class="site-footer">
    <div class="container">
      <p class="copyright">© 2025 Ahn Taemin</p>
      <ul class="social">
        <li><a href="https://github.com/taemin01">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/%ED%83%9C%EB%AF%BC-%EC%95%88-244782384/">LinkedIn</a></li>
        <li><a href="https://velog.io/@taemin01/posts">Velog</a></li>
        <li><a href="https://www.instagram.com/t._.m2_/">Instagram</a></li>
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
