import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import storeAttributes from "./store/index";
import Vuex from 'vuex';
import routes from "./router/index";
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(Vuetify);

var router = new VueRouter({
  mode: 'history',
  routes: routes
});
var store = new Vuex.Store(storeAttributes);

new Vue({
  router,
  store,
  vuetify: new Vuetify(),
  vuetify,
  render: h => h(App)
}).$mount('#app');
