<template>
  <div class="home">
    <h1>Welcome to European Universities Games 2020</h1>
    <h1>Belgrade, Serbia: July 12-25, 2020</h1>
    <button @click="login">Log In</button> &nbsp; &nbsp; &nbsp;
    <button @click="registration">Registration</button>
    <br />

    <!-- <hr/>
      <center>
      <EventsList/>
    </center> 
    -->

    <br />
    <img src="../assets/bu.png" />
    <h3>Find out information about every single game and beautiful Serbia and Belgrade</h3>
  </div>
</template>

<script>
// @ is an alias to /src
//import EventsList from '../components/EventsList'
import router from "../router/index";
export default {
  // name: 'home',
  //components: {
  //  EventsList
  //},
  methods: {
    login() {
      router.push("login");
    },
    registration() {
      router.push("registration");
    }
  }
};
</script>
