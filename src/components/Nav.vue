<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About Belgrade</router-link>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss">
#nav {
  background-color: rgb(206, 37, 37);
  padding: 30px;
  a {
    font-weight: bold;
    color: #cf2727;

    &.router-link-exact-active {
      color: #a8cf19;
    }
  }
}
</style>


