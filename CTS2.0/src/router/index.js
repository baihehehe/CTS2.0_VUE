import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index/Index'
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
      path: '/index',
      component: Index
    },
    {
      path: '/register',
      component: Register
    },

  ]
})
