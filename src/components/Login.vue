<template>
  <div id="login">
    <form>
      <center>
        <br />
        <br />
        <table>
          <tr>
            <td align="right">Username:</td>
            <td align="left">
              <input type="text" name="username" v-model="username" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">Password:</td>
            <td align="left">
              <input type="password" name="password" v-model="password" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right"></td>
            <td align="left">
              <button @click="login">Log In</button>
            </td>
          </tr>
        </table>
      </center>
    </form>
  </div>
</template>

<script>
import router from "../router/index";

export default {
  name: "Login",
  methods: {
    login() {
      var user = this.users.find(
        user => user.username == this.username && user.password == this.password
      );

      if (user != null) {
        if (user.username == "pera" || user.username == "mika") {
          localStorage.setItem("prijavljenKorisnik", user.username);
          router.push("/user");
        } else {
          if (user.username == "zika") {
            router.push("/admin");
          }
        }
      } else {
        alert("Podaci nisu korektni");
      }
    }
  },
  data() {
    return {
      username: "",
      password: "",
      users: [
        {
          username: "pera",
          password: "pera123",
          name: "Petar",
          lastname: "Petrovic"
        },
        {
          username: "zika",
          password: "zika123",
          name: "Zika",
          lastname: "Zikic"
        },
        {
          username: "mika",
          password: "mika123",
          name: "Mika",
          lastname: "Mikic"
        },
        {
          username: "ana",
          password: "ana123",
          name: "Ana",
          lastname: "Anic"
        },
        {
          username: "beca",
          password: "beca123",
          name: "Beca",
          lastname: "Becic"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>


