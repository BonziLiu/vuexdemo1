<template>
  <div id="app">
    <money></money>
    <Orange></Orange>
    <Banana></Banana>
  </div>
</template>

<script>
import Banana from './pages/Banana'
import Orange from './pages/Orange'
import Money from './pages/Money'
export default {
  name: 'app',
  components: {
    Banana,
    Orange,
    Money
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
  margin-top: 60px;
}
</style>
