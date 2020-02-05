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
          <h3>Register</h3>
          <input v-model="email" type="email" placeholder="Email">
          <input v-model="name" type="text" placeholder="Name">
          <input v-model="username" type="text" placeholder="Username">
          <input v-model="password" type="password" placeholder="Password">
          <button @click="register">Register!</button>
      </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
    data() {
        return {
            name: '',
            email: '',
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
        register () {
            this.isLoading = true

            this.$http.post('/register', {
                name: this.name,
                email: this.email,
                username: this.username,
                password: this.password
            })
            .then( res => {
                this.isLoading = false

                let { data } = res

                if ( data.success ) {
                    let parsed = JSON.stringify(data)
                    localStorage.setItem('authenticatedUser', parsed)

                    this.$store.dispatch('actionUserData', data)
                    this.$router.push('home')
                }
            })
            .catch( () => {this.isLoading = false} )

        }
    }
}
</script>

<style>

</style>