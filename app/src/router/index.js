import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Media from '../views/Media.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/media',
    name: 'media',
    component: Media
  }
]

const router = new VueRouter({
  routes
})

export default router
