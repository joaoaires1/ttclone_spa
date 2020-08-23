import Vue from 'vue';
import Vuex from 'vuex';
import { apiGetPosts } from '../services/api';

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
            state.posts = []

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
        async initPostsAction ({ commit }, username) 
        {
            const response = await apiGetPosts(
                username, false, 1
            );
            
            if (response)
                commit('initPosts', response.posts);
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
        actionPerfilPosts ({ commit }, posts)
        {
            commit('mutatePerfilPosts', posts)
        },
        actionPerfilData ({ commit }, data) {
            commit('mutatePerfilData', data)
        }
    }
})