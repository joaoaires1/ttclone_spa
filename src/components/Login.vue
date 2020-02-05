<template>
  <div class="container login">
      <loading :active.sync="isLoading"
        :loader="loader"
        :color="color"
        :is-full-page="fullPage"></loading>
      <div class="login-box">
          <div class="logo-login">
              <img src="../assets/twitter.svg" alt="">
          </div>
          <h3>Login</h3>
          <input v-model="username" type="text" placeholder="Username">
          <input v-model="password" type="password" placeholder="Password">
          <button @click="doLogin" >Acess your account!</button>
          <div class="register"> 
            <p>Don't have an account? <span @click="register">Register here</span>.</p>
          </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    data () {
        return {
            username: '',
            password: '',
            isLoading: false,
            fullPage: true,
            loader: 'dots',
            color: '#107c10'
        }
    },
    components: {
        Loading
    },
    methods: {
        async doLogin () {
            this.isLoading = true
            await this.$http.post('/login', { 
                    username: this.username,
                    password: this.password 
                })
                .then(({ data }) => { 
                    this.isLoading = false
                    if (data.success) {
                        this.$store.dispatch('actionUserData', data)
                        this.$helper.setStorageUserData(data)
                        this.$router.push('home')
                    }
                    
                })
                .catch(() => { this.isLoading = false })
        },
        register () {
            this.$router.push('register')
        },
        ...mapActions([
            'actionUserData'
        ])
    },
    created () {

    }
}
</script>

<style>

.login {
    justify-content: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.login-box {
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 24px;
    width: 100%;
    max-width: 350px;
    margin-left: 6px;
    margin-right: 6px;
}

.login-box h3 {
    letter-spacing: 0.05em;
    text-align: center;
    margin-top: 26px;
    margin-bottom: 8px;
    color: #455b67;
}

.login-box input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-box button {
    margin-top: 8px;
    width: 100%;
    padding: 12px;
    background: #107c10;
    color: #fff;
    border: none;
    border-radius: 5px; 
    font-size: 14px;
    letter-spacing: 0.05em;
    cursor: pointer;
}

.logo-login {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
}

.logo-login  img {
    width: 50px;
}

.register {
    margin-top: 15px;
    font-size: 14px;
}

.register span {
    color: #107c10;
    cursor: pointer;
}

</style>