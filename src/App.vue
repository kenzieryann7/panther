<template>
  <Navbar />
  <HomeContent />
</template>

<script>
import Navbar from './components/Navbar.vue'
import HomeContent from './components/HomeContent.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    HomeContent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
