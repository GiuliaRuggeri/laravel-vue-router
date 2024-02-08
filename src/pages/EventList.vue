<script>
import { store } from "../store.js"; //state management
import EventCard from "../components/EventCard.vue";

export default {
  name: "EventList",

  components: {
    EventCard
  },

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div>
    <div class="container">
      <div class="row">
        <h1>Events list</h1>
        <EventCard v-for="event in store.eventList" :event="event"/>
      </div>
    </div>
  </div>
</template>
