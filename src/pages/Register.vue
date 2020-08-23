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
import { apiRegister } from '../services/api';

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
        async register () {
            this.isLoading = true;
            
            const response = await apiRegister(
                this.email,
                this.name,
                this.username,
                this.password,
            );

            if (response) {
                await this.$helper.setStorageUserData(response.user);
                window.location.replace("/home");
            }

            this.isLoading = false;
        }
    }
}
</script>

<style>

</style>