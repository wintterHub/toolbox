import Vue from 'vue'
import Router from 'vue-router'
import common from './common.js'

Vue.use(Router)

let assignRoutes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    children: [...common],
    redirect: { name: 'UrlBatchGenerat' }
  }
]

const router = new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: assignRoutes
})

export default router
