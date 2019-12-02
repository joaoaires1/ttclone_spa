import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: ""
    },
    mutations: {
        changeName (state, payload) {
            state.name = payload
        }   
    },
    actions: {
        changeNameAction ({ commit }, name) {
            commit('changeName', name)  
        }
    }
})