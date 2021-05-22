import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import PageLoading from './components/PageLoading.vue';

Vue.config.productionTip = false

Vue.component("PageLoading", PageLoading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
