<template>
  <div class="container">
      <div class="login-box">
          <div class="logo">
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

                    this.$store.dispatch('userDataAction', data)
                    this.$router.push('home')
                }
            })
            .catch( () => {} )

        }
    }
}
</script>

<style scoped>

.container {
    display: flex;
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

.logo {
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
}

.logo img {
    width: 50px;
}

</style>