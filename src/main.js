import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import storeAttributes from "./store/index";
import Vuex from 'vuex';
import routes from "./router/index";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

var router = new VueRouter({
  mode: 'history',
  routes: routes
});
var store = new Vuex.Store(storeAttributes);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
