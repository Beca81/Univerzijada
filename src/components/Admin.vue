<template>
  <div id="admin">
    <br />
    <br />Hello moderator!
    <br />
    <br />
    <h3>COMPETITION SCHEDULE ALL GAMES</h3>
    <div id="modify" style="text-align: right">
      <router-link to="/ModifyUser" style="text-align: right">Student change</router-link>
      <br />
      <br />
      <router-link to="/ModifyGame" style="text-align: right">Game change</router-link>
    </div>
    <br />
    <center>
      <EventsList />
    </center>
    <br />
    <br />
  </div>
</template>

<script>
import EventsList from "../components/EventsList";
import router from "../router/index";
export default {
  name: "Admin",
  components: {
    EventsList
  }
};
</script>

<style lang="scss">
</style>


