<template>
  <div class="left-section">

        <div class="left-nav">

            <div class="logo">
                <img src="../assets/twitter.svg"  alt="">
            </div>

            <div class="nav-link" @click="navigate('home')">
                <img src="../assets/home-icon.svg" alt="">
                <p class="nav-text">Home Page</p>
            </div>

            <div class="nav-link" @click="navigate('explore')">
                <img src="../assets/hashtag.svg" alt="">
                <p class="nav-text">Explore</p>
            </div>

            <div class="nav-link" @click="navigate(getUserData.username)" >
                <img :src="getUserData.avatar" class="nav-avatar" alt="">
                <p class="nav-text">Perfil</p>
            </div>

            <div @click="doLogout" class="logout">
                <img src="../assets/logout.svg" alt="">
            </div>

        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data () {
        return {
            user: ''
        }
    },
    methods: {
        ...mapActions([
            'clearPostsAction'
        ]),
        doLogout () {

            this.$http.post('/logout', {
                id: this.user.id,
                api_token: this.user.api_token
            })
            .then(() => {
                this.$helper.setStorageUserData(false)
                this.$store.dispatch('clearPostsAction')
                this.$router.push('login')
            })
            .catch(() => {})

        },
        navigate(route) {
            this.$router.push(route).catch(() => {})
        }
    },
    computed: {
        ...mapGetters([
            'getUserData'
        ])
    },
    created () {
        this.user = this.$helper.getStorageUserData()
    }
}

</script>

<style>

.logout img {
    cursor: pointer;
}

</style>