<template>
  <div id="app">
    <MenuNavigation></MenuNavigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import MenuNavigation from "./components/MenuNavigation.vue"
import Footer from "./components/Footer.vue"


export default {
  name: 'App',
  components: {
    MenuNavigation,
    Footer,
  },
  data: () => ({
    //
  }),
};
</script>
