import Vue from 'vue'
import App from './App.vue'

//The main.js is rendering the App.vue component, which gets mounted as DOM element
//in index html

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
