<template>
  <div id="userchange">
    <h2 align="center">Modify student</h2>
    <form>
      <center>
        <table>
          <br />
          <tr></tr>
          <tr>
            <td align="right">First Name:</td>
            <td align="left">
              <input type="text" value="Mika" name="name" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">Last Name:</td>
            <td align="left">
              <input type="text" value="Mikic" name="surname" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">Phone:</td>
            <td align="left">
              <input type="text" value="063456789" name="surname" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">Address:</td>
            <td align="left">
              <input type="text" value="Decanska 12, Beograd" name="surname" />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right">Username:</td>
            <td align="left">
              <input type="text" value="mika" name="surname" />
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
            <td></td>
            <td align="left">
              <button @click="change">Save change</button>
            </td>
          </tr>
        </table>
      </center>
    </form>
  </div>
</template>