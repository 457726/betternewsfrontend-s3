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
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
