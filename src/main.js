import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VirtualList from 'vue-virtual-scroll-list'
Vue.component('virtual-list', VirtualList)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

