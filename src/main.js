import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as helper from '../src/utils/helpers'
import * as constants from '../src/utils/constants'

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: constants.api_url
})

Vue.prototype.$helper = helper

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
