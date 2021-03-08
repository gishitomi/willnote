// require('./bootstrap');
import Vue from 'vue/dist/vue.esm'
import router from './router'
import App from './App.vue'

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App />'
})