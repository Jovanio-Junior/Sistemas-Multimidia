import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'


Vue.config.productionTip = false

new Vue({
  router,
  VueSession,
  render: h => h(App)
}).$mount('#app')
