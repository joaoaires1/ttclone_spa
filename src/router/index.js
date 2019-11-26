import Vue from 'vue'
import VueRouter from 'vue-router'
import Tela1 from '../components/Tela1'
import Tela2 from '../components/Tela2'
import Root from '../components/Root'

Vue.use(VueRouter)

const a = 1

const routes = [
    {
        path: '/',
        component: Root,
        beforeEnter: (to, from, next) => {
            if (a == 2) next('/foo')
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
    }
]

export default new VueRouter({ routes })