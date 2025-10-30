import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectListView from '@/views/ProjectListView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/projects', component: ProjectListView },
  { path: '/projects/:id', component: ProjectDetailView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
