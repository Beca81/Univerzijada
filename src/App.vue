<template>
  <div id="app">
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #20569c;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #1b39df;

    &.router-link-exact-active {
      color: #f7f8f8;
    }
  }
}
</style>
