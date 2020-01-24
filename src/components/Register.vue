<template>
  <div class="container login">
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
export default {
    data() {
        return {
            name: '',
            email: '',
            username: '',
            password: ''
        }
    },
    methods: {
        register () {

            this.$http.post('/register', {
                name: this.name,
                email: this.email,
                username: this.username,
                password: this.password
            })
            .then( res => {
                let { data } = res

                if ( data.success ) {
                    let parsed = JSON.stringify(data)
                    localStorage.setItem('authenticatedUser', parsed)

                    this.$store.dispatch('actionUserData', data)
                    this.$router.push('home')
                }
            })
            .catch( () => {} )

        }
    }
}
</script>

<style>

</style>