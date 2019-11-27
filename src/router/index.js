import Vue from 'vue'
import VueRouter from 'vue-router'
import Tela1 from '../components/Tela1'
import Tela2 from '../components/Tela2'
import Root from '../components/Root'
import Login from '../components/Login'

Vue.use(VueRouter)

const a = 1

const routes = [
    {
        path: '/',
        component: Root,
        beforeEnter: (to, from, next) => {
            if (a == 1) next('/foo')
            else next()
        }
    },
    {
        path: '/foo',
        component: Tela1,
    },
    {
        path: '/bar',
        component: Tela2
    },
    {
        path: '/login',
        component: Login
    }
]

export default new VueRouter({ routes })