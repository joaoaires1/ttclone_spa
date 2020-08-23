import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Explore from '../components/Explore'
import * as helper from '../utils/helpers'
import store from '../store'

const Home = () => import('../pages/Home')
const Perfil = () => import('../pages/Perfil')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        beforeEnter: (to, from, next) => {
            let isAuthenticated = JSON.parse(localStorage.getItem('authenticatedUser'))
            
            if (isAuthenticated) {
                next('/home')
            } else {
                next('/login')
            }
        }
    },
    {
        name: 'login',
        path: '/login',
        component: Login,
        beforeEnter: (to, from, next) => {
            let isAuthenticated = JSON.parse(localStorage.getItem('authenticatedUser'))

            if (isAuthenticated) {
                next('/home')
            } else {
                next()
            }
        }
    },
    {
        name: 'register',
        path: '/register',
        component: Register,
        beforeEnter: (to, from, next) => {
            let isAuthenticated = JSON.parse(localStorage.getItem('authenticatedUser'))

            if (isAuthenticated) {
                next('/home')
            } else {
                next()
            }
        }
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'explore',
        path: '/explore',
        component: Explore,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'perfil',
        path: '/:username',
        component: Perfil,
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({ mode: 'history', routes })

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record  => record.meta.requiresAuth)
    const isAuthenticated = helper.getStorageUserData()
    
    if (requiresAuth && !isAuthenticated) {
        next('/login')
    } else {
        store.dispatch('actionUserData', isAuthenticated)
        next()
    }
})

export default router