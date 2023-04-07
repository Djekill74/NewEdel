import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fonction',
    name: 'fonction',
    component: () => import('../views/FonctionView.vue')
  }, 
  {
    path:'/galerie',
    name: 'galerie',
    component:()=> import ('../views/GalerieView.vue')
  },
  {
    path:'/modele',
    name: 'modele',
    component:()=> import ('../views/ModeleView.vue')
  },
  {
    path:'/propos',
    name: 'propos',
    component:()=> import ('../views/ProposView.vue')
  },
  {
    path:'/contact',
    name: 'contact',
    component:()=> import ('../views/ContactView.vue')
  },
  {
    path:'/legalnot',
    name: 'legalnot',
    component:()=> import ('../views/LegalNot.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
