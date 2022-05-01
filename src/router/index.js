import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import(/* webpackChunkName: "view-pedidos" */ '../views/Pedidos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
