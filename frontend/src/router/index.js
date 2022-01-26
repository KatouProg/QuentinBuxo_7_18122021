import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userSettings',
    name: 'userSettings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/userSettings.vue')
  },
  {
    path: '/login',
    name: login,
    component: () => import('../components/login.vue')
  },
  {
    path: '/register',
    name: register,
    component: () => import('../components/register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router 
