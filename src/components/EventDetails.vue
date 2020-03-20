<template>
  <div id="eventDetails">
    <h1>{{myevent.name}}</h1>
    <h1>{{myevent.date}}</h1>
    <h1>{{myevent.time}}</h1>
    <h1>{{myevent.where}}</h1>
    <h1>{{myevent.address}}</h1>
    <h1>
      <img :src="myevent.img" height="450px" width="900px" />
    </h1>
  </div>
</template>

<script>
export default {
  name: "EventDetails",
  data() {
    return {
      myevent: {},
      events: [
        {
          id: 1,
          name: "Volleyball game",
          description: "ETF_Belgrade - ETF_Zagreb",
          date: "20.07.2020.",
          time: "18:00",
          where: "Hala Aleksandar Nikolić",
          address: "Čarlija Čaplina 39",
          img: require("../assets/halag.jpg")
        },
        {
          id: 2,
          name: "Basketball game",
          description: "FON_Belgrade - TFN_NoviSad",
          date: "17.07.2020.",
          time: "19:00",
          where: "SRC 11. April",
          address: "Autoput 2",
          img: require("../assets/srcg.jpg")
        },
        {
          id: 3,
          name: "Football game",
          description: "Pharmacy_Belgrade - Pharmacy_Ljubljana",
          date: "19.07.2020.",
          time: "19:30",
          where: "Arena Beograd",
          address: "Bul. Arsenija Čarnojevića 58",
          img: require("../assets/arenag.jpg")
        }
      ]
    };
  },
  created() {
    var id = Number(this.$route.params.id);
    var event = this.events.find(event => event.id == id);
    this.myevent = event;
  }
};
</script>

<style lang="scss">
</style>


