import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import soyaine from '@/components/soyaine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/soyaine',
      name: 'Soyaine',
      component: soyaine
    }
  ]
})
