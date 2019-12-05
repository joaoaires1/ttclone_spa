import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { log } from 'util'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: "",
        posts: []
    },
    getters: {
        getPosts: state => {
            return state.posts
        }
    },
    mutations: {
        changeName (state, payload) {
            state.name = payload
        },
        initPosts ( state, payload ) {
            
            payload.map(query => {
                state.posts.push(query)
            })
            
        },
        clearPosts (state) {
            state.posts = []
        }   
    },
    actions: {
        changeNameAction ({ commit }, name) {
            commit('changeName', name)  
        },
        async initPostsAction ({ commit }) 
        {
            let isAuthenticated = JSON.parse(localStorage.getItem('authenticatedUser'))

            await axios.get('http://127.0.0.1:8000/api/posts', { params: {
                id: isAuthenticated.id,
                api_token: isAuthenticated.api_token
            } })
            .then(res => {

                commit('initPosts', res.data.posts)

            })
            .catch(err => log(err)) 
        },
        addPostAction ({ commit }, post) 
        {
            commit('initPosts', post)
        },
        clearPostsAction ({ commit }) {
            commit('clearPosts')
        }
    }
})