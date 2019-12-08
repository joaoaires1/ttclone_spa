<template>
  <div class="left-section">

        <div class="logo">
            <img src="../assets/twitter.svg" width="30px" alt="">
        </div>

        <div class="nav">

            <div class="nav-link" @click="navigate('home')">
                <img src="../assets/home-icon.svg" width="30px" alt="">
                <p class="nav-text">Home Page</p>
            </div>
            <div class="nav-link" @click="navigate('perfil')" >
                <img src="../assets/avatar.png" class="nav-avatar" width="30px" alt="">
                <p class="nav-text">Perfil</p>
            </div>
            <div class="logout nav-link">
                <button @click="doLogout" >sair</button>
            </div>
            <div class="nav-tweet nav-link">
                <button>Tweet</button>
            </div>

        </div>

    </div>
</template>

<script>

import { mapActions } from 'vuex'

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
            }).then(() => {
                localStorage.setItem('authenticatedUser', false)
                this.$store.dispatch('clearPostsAction')
                this.$router.push('login')
            })

        },
        navigate(route) {
            this.$router.push(route).catch(() => {})
        }
    },
    created () {
        this.user = JSON.parse(localStorage.getItem('authenticatedUser'))
    }
}

</script>

<style>

.left-section {
    width: 25%;
    padding-left: 15px;
    padding-right: 15px;
}

.logo {
    padding-top: 10px;
    padding-bottom: 10px;
}

.nav div {
    display: flex;
    align-items: center;
    margin-top: 12px;
}

.nav-text {
    margin-left: 26px;
    font-size: 19px;
    font-weight: bold;
    letter-spacing: 0.05em;
}

.nav-avatar {
    border-radius: 50px;
}

.nav-tweet {
    justify-content: center;
}

.nav-tweet button {
    padding: 8px 36px;
    border: none;
    border-radius: 50px;
    background: #107C10;
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.05em;
}

.logout button{
    padding: 4px 6px;
    border: none;
    border-radius: 50px;
    background: #107C10;
    color: #FFF;
    font-weight: bold;
    letter-spacing: 0.05em
}

.nav-link, .nav-link button {
    cursor: pointer;
}

</style>