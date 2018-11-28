import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      component: Login
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/register',
      component: Register
    },

  ]
})
