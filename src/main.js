import Vue from 'vue'
import App from './App.vue'

import store from "./store";
import Invoice from "./components/index.js";

Vue.use(Invoice, { store });
Vue.config.productionTip = false;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
