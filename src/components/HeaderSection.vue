<template>
  <header class="site-header">
    <nav class="nav-inner container">
      <div class="brand" @click="router.push('/')">An Taemin</div>

      <ul class="menu">
        <li
          v-for="menu in menus"
          :key="menu.id"
          @click="scrollTo(menu.id)"
          class="menu-item"
        >
          {{ menu.label }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const menus = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' }
]

const scrollTo = (id) => {
  // If not on the home path, go to '/' first then scroll
  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 400)
    })
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--hf-bg);
  height: var(--hf-height);
  border-bottom: 1px solid var(--card-border);
}
.site-header .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 100%; display:flex; align-items:center }
.container { max-width: 1200px; margin: 0 auto; padding: 10px 24px; }
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.brand { font-weight: 700; font-size: 20px; cursor: pointer; color:var(--text) }
.menu { list-style: none; margin: 0; padding: 0; display:flex; gap:18px }
.menu-item { cursor:pointer; color:var(--muted); font-size:14px }
.menu-item:hover { color:var(--text); text-decoration: none }
</style>

        

