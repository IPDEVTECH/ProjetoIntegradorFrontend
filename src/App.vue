<template>
  <v-app>
    <v-app-bar app style="background-color: firebrick;" dark>
      <div class="d-flex align-center">
          <h1>Pit Food</h1>
      </div>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
