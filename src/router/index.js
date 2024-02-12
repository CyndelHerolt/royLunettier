import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/application',
      name: 'application',
      component: () => import('../views/ApplicationView.vue')
    },
    {
      path: '/demarche',
      name: 'demarche',
      component: () => import('../views/DemarcheView.vue')
    },
  ]
})

export default router
