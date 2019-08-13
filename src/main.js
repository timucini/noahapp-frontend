import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import storeAttributes from "./store/index";
import Vuex from 'vuex';
import router from "./router";
import Vuetify from 'vuetify/lib'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

var store = new Vuex.Store(storeAttributes);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
