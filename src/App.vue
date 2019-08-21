<template>
  <v-app>
    <v-app-bar app>
     <div>Test</div>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from "./components/AppHeader"

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data: () => ({
    //
  }),
};
</script>
