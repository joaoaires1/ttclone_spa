import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as helper from '../src/utils/helpers'

Vue.config.productionTip = false

Vue.prototype.$helper = helper

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
