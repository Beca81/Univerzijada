<template>
  <div id="gamechange">
    <h2 align="center">Modify game</h2>
    <form>
      <center>
        <br />
        <table>
          <tr>
            <td align="right">Student:</td>
            <td align="left">
              <select style="width: 155px">
                <option></option>
                <option>Mika Mikic</option>
                <option>Pera Peric</option>
                <option>Ana Anic</option>
                <option>Jovan Jovanovic</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">Place:</td>
            <td align="left">
              <select style="width: 155px">
                <option></option>
                <option>Hala Aleksandar Nikolić</option>
                <option>SRC 11. April</option>
                <option>Arena Beograd</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">Date and Time:</td>
            <td align="left">
              <datetime type="datetime" v-model="datetime"></datetime>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right"></td>
            <td align="left">
              <button @click="change">Save changes</button>
            </td>
          </tr>
        </table>
      </center>
    </form>
  </div>
</template>

<script>
import Vue from "vue";
import Datetime from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

Vue.use(Datetime);

export default {
  components: {}
};
</script>