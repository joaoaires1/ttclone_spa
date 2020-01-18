import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { log } from 'util'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userData: null,
        posts: [],
        exploreResults: [],
        showEditPerfilModal: false,
        perfilPosts: [],
        perfilData: null
    },
    getters: {
        getUserData: state => {
            return state.userData
        },
        getPosts: state => {
            return state.posts
        },
        getExploreResults: state => {
            return state.exploreResults
        },
        getShowEditPerfilModal: state => {
            return state.showEditPerfilModal
        },
        getPerfilPosts: state => {
            return state.perfilPosts
        },
        getPerfilData: state => {
            return state.perfilData
        }
    },
    mutations: {
        mutateUserData ( state, payload ) {
            state.userData = payload
        },
        initPosts ( state, payload ) {
            
            payload.map(query => {
                state.posts.push(query)
            })
            
        },
        clearPosts (state) {
            state.posts = []
        },
        addPost ( state, payload ) {
            state.posts.unshift(payload)
        },
        setExploreResults ( state, payload ) {
            state.exploreResults = payload
        },
        changeShowEditPerfilModal ( state, payload ) {
            state.showEditPerfilModal = payload
        },
        mutatePerfilPosts ( state, payload ) {
            state.perfilPosts = payload
        },
        mutatePerfilData ( state, payload ) {
            state.perfilData = payload
        }  
    },
    actions: {
        actionUserData ({ commit }, user) {
            commit('mutateUserData', user)
        },
        async initPostsAction ({ commit }) 
        {
            let isAuthenticated = JSON.parse(localStorage.getItem('authenticatedUser'))

            await axios.get('http://127.0.0.1:8000/api/posts', { params: {
                id: isAuthenticated.id,
                api_token: isAuthenticated.api_token
            } })
            .then(res => {
                
                if (res.data.posts.length == this.state.posts.length) return
                commit('initPosts', res.data.posts)

            })
            .catch(err => {
                localStorage.setItem('authenticatedUser', null)
                log(err)
            }) 
        },
        addPostAction ({ commit }, post) 
        {
            commit('addPost', post)
        },
        clearPostsAction ({ commit }) {
            commit('clearPosts')
        },
        setExploreResultsAction ({ commit }, results) {
            commit('setExploreResults', results)
        },
        async actionPerfilPosts ({ commit }, username)
        {
            let isAuthenticated = JSON.parse(localStorage.getItem('authenticatedUser'))

            await axios.get('http://127.0.0.1:8000/api/posts_by_username', {
                params: {
                    id: isAuthenticated.id,
                    api_token: isAuthenticated.api_token,
                    username: username
                }
            })
            .then(res => {
                
                commit('mutatePerfilPosts', res.data.posts)
                
            })
        },
        actionPerfilData ({ commit }, data) {
            commit('mutatePerfilData', data)
        }
    }
})