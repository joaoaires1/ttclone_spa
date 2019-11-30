import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Register from '../components/Register'

Vue.use(VueRouter)

const a = 1

const routes = [
    {
        path: '/',
        beforeEnter: (to, from, next) => {
            if (a == 1) next('/login')
            else next()
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]

export default new VueRouter({ routes })