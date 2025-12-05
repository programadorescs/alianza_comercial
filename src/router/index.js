import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacto', // La URL que verá el usuario
    name: 'contacto', // El nombre de la ruta (usado en RouterLink)
    component: () => import('../views/ContactoView.vue') // Carga dinámica de la vista
  },
  {
      path: '/nosotros', // La URL que verá el usuario
      name: 'nosotros', // El nombre de la ruta (usado en RouterLink)
      component: () => import('../views/NosotrosView.vue') // Carga dinámica de la vista
    }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
