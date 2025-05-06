import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnunciosView from '@/views/AnunciosView.vue'
import DetalheAnuncioView from '@/views/DetalheAnuncioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,

    },
    {
      path: '/anuncios',
      name: 'anuncios',
      component: AnunciosView,

    },
    {
      path: '/anuncios/:id',
      name: 'DetalheAnuncio',
      component: DetalheAnuncioView

    },
  ],
})

export default router
