import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Test from './components/Test'

Vue.config.productionTip = false

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
