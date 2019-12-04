<template>
  <div class="left-section">

        <div class="logo">
            <img src="../assets/twitter.svg" width="30px" alt="">
        </div>

        <div class="nav">

            <div>
                <img src="../assets/home-icon.svg" width="30px" alt="">
                <p class="nav-text">Home Page</p>
            </div>
            <div>
                <img src="../assets/avatar.png" class="nav-avatar" width="30px" alt="">
                <p class="nav-text">Perfil</p>
            </div>
            <div class="logout">
                <button @click="doLogout" >sair</button>
            </div>
            <div class="nav-tweet">
                <button>Tweet</button>
            </div>

        </div>

    </div>
</template>

<script>

export default {
    data () {
        return {
            user: ''
        }
    },
    methods: {
        doLogout () {

            this.$http.post('/logout', {
                id: this.user.id,
                api_token: this.user.api_token
            }).then(() => {
                localStorage.setItem('authenticatedUser', false)
                this.$router.push('login')
            })

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
    letter-spacing: 0.05em
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

</style>