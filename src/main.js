import Vue from 'vue';
import App from './App';
import { router } from './router';
import Vuex from 'vuex';
import store from './store/store';

Vue.use(Vuex);

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
});
