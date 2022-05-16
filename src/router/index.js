import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Callback from '@/views/Callback.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
    {
        path: '/callback',
        name: 'callback',
        component: Callback
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//// very basic "setup" of a global guard
//router.beforeEach((to, from, next) => {
//    if (to.name == 'callback') { // check if "to"-route is "callback" and allow access
//        next()
//    } else if (router.app.$auth.isAuthenticated()) { // if authenticated allow access
//        next()
//    } else { // trigger auth0 login
//        router.app.$auth.login()
//    }
//})

export default router
