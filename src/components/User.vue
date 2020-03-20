<template>
  <div id="user">
    <br />
    <br />
    Hello student, {{username}}!
    <br />
    <br />
    <h3>COMPETITION SCHEDULE FOR {{username}}</h3>

    <div align="right">
      <router-link to="/ModifyUser">Student change</router-link>
    </div>
    <br />
    <center>
      <EventsList />
    </center>
    <br />
    <br />
    <div id="search" align="right">
      <form>
        <tr>
          <td align="right">Search(date&time)</td>
          <td align="left">
            <datetime type="datetime" v-model="datetime"></datetime>
          </td>
        </tr>

        <br />Search(place)
        <select style="width: 155px">
          <option></option>
          <option>Hala Aleksandar Nikolić</option>
          <option>SRC 11. April</option>
          <option>Arena Beograd</option>
        </select>
        <br />
        <br />
        <input type="button" name="button" value="Search" />
        <br />
        <br />
      </form>
    </div>
  </div>
</template>

<script>
import EventsList from "../components/EventsList";
import router from "../router/index";
import Vue from "vue";
import Datetime from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

Vue.use(Datetime);

export default {
  name: "home",
  components: {
    EventsList
  },
  name: "User",
  data() {
    return {
      username: ""
    };
  },
  created() {
    var username = localStorage.getItem("prijavljenKorisnik");
    this.username = username;
  }
};
</script>

<style lang="scss">
</style>


