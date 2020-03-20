<template>
  <div id="userregistration">
    <form>
      <center>
        <br />
        <br />
        <table>
          <tr>
            <td align="right">Name:</td>
            <td align="left">
              <input type="text" name="name" v-model="name" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">Surname:</td>
            <td align="left">
              <input type="text" name="surname" v-model="surname" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">Phone:</td>
            <td align="left">
              <input type="text" name="phone" v-model="phone" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">Address:</td>
            <td align="left">
              <input type="text" name="address" v-model="adress" />
            </td>
          </tr>
          <br />
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
            <td align="right">Confirm password:</td>
            <td align="left">
              <input type="password" name="password" v-model="password" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right"></td>
            <td align="left">
              <button @click="save">Save</button>
            </td>
          </tr>
        </table>
      </center>
    </form>
  </div>
</template>

