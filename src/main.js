import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import ElementUI from 'element-ui'
import Mixin from './mixins/index.js'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import './styles/theme/index.css'
import './styles/index.css'

Vue.use(ElementUI)
Vue.use(Mixin)

Vue.config.productionTip = false
window.vue = Vue

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
