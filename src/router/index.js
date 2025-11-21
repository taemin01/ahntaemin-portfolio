import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects/:id', component: ProjectDetailView }
]

const router = createRouter({
  // history: createWebHistory('/ahntaemin-portfolio/'),
  history: createWebHistory(process.env.BASE_URL || '/'),
  routes,
});


export default router
