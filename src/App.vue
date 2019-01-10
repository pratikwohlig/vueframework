<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header-layout></header-layout>
    <router-view/>
    <footer-layout></footer-layout>
  </div>
</template>

<script>
import Header from './layouts/Header'
import Footer from './layouts/Footer'
export default {
  name: 'App',
  components: {
    'header-layout': Header,
    'footer-layout': Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
