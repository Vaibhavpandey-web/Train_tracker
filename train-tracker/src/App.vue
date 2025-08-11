<template>
<template>
    <TrainMap />
</template>


<v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

    

<script>
import TrainMap from './components/TrainMap.vue';

export default {
  components: {
    TrainMap
  },
  name: 'App'
};
</script>

<style>
body {

  margin: 0;
  font-family: 'Roboto', sans-serif;
}
</style>