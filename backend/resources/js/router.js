import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/Login.vue'
import Notes from './pages/Notes.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Notes
    },
    {
        path: '/login',
        component: Login
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router