<template>
  <div id="event">
    <td>{{event.id}}</td>
    <td>{{event.naziv}}</td>
    <td>{{event.description}}</td>
    <td>{{event.date}}</td>
    <td>{{event.time}}</td>
    <td>{{event.where}}</td>
    <td>{{event.address}}</td>

    <td>
      <router-link :to="/eventdetails/+event.id">{{event.details}}</router-link>
    </td>
  </div>
</template>

<script>
export default {
  name: "Event",
  props: ["event"]
};
</script>

<style lang="scss">
</style>


