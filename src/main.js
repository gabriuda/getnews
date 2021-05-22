import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import FeedNews from './components/FeedNews.vue';

Vue.component('FeedNews', FeedNews);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
