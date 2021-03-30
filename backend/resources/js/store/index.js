import Vue from 'vue/dist/vue.esm'
import 'es6-promise/auto'
import Vuex from 'vuex'

import auth from './auth'
import error from './error'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        auth,
        error
    }
})

export default store