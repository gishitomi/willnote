import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/Login.vue'
import Notes from './pages/Notes.vue'
import SystemError from './pages/errors/System.vue'

import store from './store'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Notes
    },
    {
        path: '/login',
        component: Login,
        // 定義されたルートにアクセスされてページコンポーネントが切り替わる直前に呼び出される関数
        beforeEnter(to, from, next) {
            if (store.getters['auth/check']) {
                next('/')
            } else {
                next()
            }
        }
    },
    {
        path: '/500',
        component: SystemError,
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router