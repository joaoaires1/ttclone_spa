import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Home'
// import Perfil from '../components/Perfil'
import Explore from '../components/Explore'
import * as helper from '../utils/helpers'
import store from '../store'

const Perfil = () => import('../components/Perfil')

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
        store.dispatch('userDataAction', isAuthenticated)
        next()
    }
})

export default router