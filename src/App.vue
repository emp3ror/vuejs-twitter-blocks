<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "./views/home";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
