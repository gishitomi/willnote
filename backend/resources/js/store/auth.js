import { OK } from '../util'
import { UNPROCESSABLE_ENTITY } from '../util'

const state = {
    user: null,
    apiStatus: null,
    loginErrorMessages: null,
    registerErrorMessages: null,
}

const getters = {
    // 確実に真偽値を返せるように二重否定
    check: state => !!state.user,
    username: state => state.user ? state.user.name : ''

}

const mutations = {
    setUser(state, user) {
        state.user = user
    },
    setApiStatus(state, apiStatus) {
        state.apiStatus = apiStatus
    },
    setLoginErrorMessages(state, messages) {
        state.loginErrorMessages = messages
    },
    setRegisterErrorMessages(state, messages) {
        state.registerErrorMessages = messages
    }
}

const actions = {
    async register(context, data) {
        // 最初はnullにする
        context.commit('setApiStatus', null)
        const response = await axios.post('/api/register', data)
            // 正常にpostできた場合
        if (response.status === OK) {
            context.commit('setApiStatus', true)
            context.commit('setUser', response.data)
            return false
        }
        // 正常にpostできなかった場合
        context.commit('setApiStatus', false)
            // 入力内容に不備があった場合
        if (response.status === UNPROCESSABLE_ENTITY) {
            context.commit('setRegisterErrorMessages', response.data.errors)
        }
        // システムエラーの場合
        else {
            // あるストアモジュールから別のモジュールのミューテーションを commit する場合は第三引数に { root: true } を追加する。
            context.commit('error/setCode', response.status, { root: true })
        }

    },
    async login(context, data) {
        context.commit('setApiStatus', null)
        const response = await axios.post('/api/login', data)

        if (response.status === OK) {
            context.commit('setApiStatus', true)
            context.commit('setUser', response.data)
            return false
        }

        context.commit('setApiStatus', false)
        if (response.status === UNPROCESSABLE_ENTITY) {
            context.commit('setLoginErrorMessages', response.data.errors)
        } else {
            context.commit('error/setCode', response.status, { root: true })
        }
    },
    async logout(context) {
        const response = await axios.post('/api/logout')
        context.commit('setUser', null)
    },
    async currentUser(context) {
        const response = await axios.get('/api/user')
        const user = response.data || null
        context.commit('setUser', user)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}