<template>
  <div id="app">
    <TheNavBar></TheNavBar>
    <router-view/>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar.vue';
export default {
  name: 'App',
  components: {TheNavBar}
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>