import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './styles/tailwind.css';

new Vue({
  render: h => h(App),
}).$mount('#app')
