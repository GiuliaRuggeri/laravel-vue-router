<script>
import { store } from "../store.js";
import axios from "axios";

export default {
    name: "EventDetail",
    
    data() {
    return {
        store,
      eventDetails : []
    };
  },
    mounted() {
    this.getEventDetails();
  },
  
  methods: {
    getEventDetails() {
      let url = this.store.apiUrl + this.store.apiEventEndpoint + '/' + this.$route.params.id;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200 && result.data.success) {
            console.log(result.data.payload);
            this.eventDetails = result.data.payload[0];
          } else {
            console.error("There's an error");
          }
        })
        .catch((errore) => {
          console.error(errore);
        });
    },
  },
};
</script>

<template>
    <div class="container">
        <div class="row">
            <h1 class="mb-3">Event details {{ this.$route.params.id }}</h1>
            <div class="card h-100">
            <div class="card-header">{{ this.eventDetails.date }}</div>
            <div class="card-body">
                <h5 class="card-title">{{ this.eventDetails.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    {{ this.eventDetails.user? this.eventDetails.user.name : "Unidentified User" }}
                </h6>
                <p class="card-text">There are still <b>{{ this.eventDetails.available_tickets }}</b> tickets available.
                </p>
                <span v-for="tag in this.eventDetails.tags" class="badge bg-danger text-black me-2">{{ tag.name }}</span>
            </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped></style>