import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Reflexions from '../components/Reflexions.vue'
import TravailPreparatoire from '../components/TravailPreparatoire.vue'
import Maquettage from '../components/Maquettage.vue'
import Developpement from '../components/Developpement.vue'

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
      component: () => import('../views/DemarcheView.vue'),
      children: [
        {
          path: 'reflexions',
          component: Reflexions
        },
        {
          path: 'travail-preparatoire',
          component: TravailPreparatoire
        },
        {
          path: 'maquettage',
          component: Maquettage
        },
        {
          path: 'developpement',
          component: Developpement
        },
        // définir d'autres sous-routes ici
      ]
    },
    {
      path: '/royLunetier',
      name: 'roy Lunetier',
      component: () => import('../views/EntrepriseView.vue')
    },
  ]
})

export default router
