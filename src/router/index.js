import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Callback from '@/views/Callback.vue'
import SearchView from '@/views/SearchView.vue'

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
    },
    {
        path: '/search/:criteria',
        name: 'search',
        component: SearchView
    },
    {
        path: '/corona',
        name: 'corona',
        component: () => import('../views/CoronaView.vue')
    },
    {
        path: '/sport',
        name: 'sport',
        component: () => import('../views/SportView.vue')
    },
    {
        path: '/oorlog',
        name: 'oorlog',
        component: () => import('../views/WarView.vue')
    },
    {
        path: '/rate/:article',
        name: 'rate',
        component: () => import('../views/RatingView.vue')
    }//,
    //{
    //    path: '/reviews/:title',
    //    name: 'reviews',
    //    component: () => import('../components/partials/CommentsView.vue')
    //}
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
