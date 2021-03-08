import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './pages/Login.vue'
import Notes from './pages/Notes.vue'
import VueRouter from 'vue-router'

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
    routes
})

export default router