<template>
  <div id="pictures">
    <table>
      <tr>
        <th align="left">ID</th>
        <th align="left">Name</th>
        <th align="left">Description</th>
        <th align="left">Date</th>
        <th align="left">Time</th>
        <th align="left">Place</th>
        <th align="left">Address</th>
        <th align="left">Details</th>
      </tr>

      <tr v-for="event in events" :key="event">
        <td>{{event.id}}</td>
        <td>{{event.name}}</td>
        <td>{{event.description}}</td>
        <td>{{event.date}}</td>
        <td>{{event.time}}</td>
        <td>{{event.where}}</td>
        <td>{{event.address}}</td>
        <td>
          <router-link :to="/eventdetails/+event.id">{{event.details}}</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
//import Event from "./Event";

export default {
  name: "EventsList",
  components: {
    Event
  },
  data() {
    return {
      events: [
        {
          id: 1,
          name: "Volleyball game",
          description: "ETF_Belgrade - ETF_Zagreb",
          date: "20.07.2020.",
          time: "18:00",
          where: "Hala Aleksandar Nikolić",
          address: "Čarlija Čaplina 39",
          details: "details"
        },
        {
          id: 2,
          name: "Basketball game",
          description: "FON_Belgrade - TFN_NoviSad",
          date: "17.07.2020.",
          time: "19:00",
          where: "SRC 11. April",
          address: "Autoput 2",
          details: "details"
        },
        {
          id: 3,
          name: "Football game",
          description: "Pharmacy_Belgrade - Pharmacy_Ljubljana",
          date: "19.07.2020.",
          time: "19:30",
          where: "Arena Beograd",
          address: "Bul. Arsenija Čarnojevića 58",
          details: "details"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
</style>


