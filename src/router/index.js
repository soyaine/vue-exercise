import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import BI from '@/components/BI'
import Video from '@/components/Video'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/BI',
      name: 'BI',
      component: BI
    },
    {
      path: '/Video',
      name: 'Video',
      component: Video
    },
    {
      path: '/Admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
