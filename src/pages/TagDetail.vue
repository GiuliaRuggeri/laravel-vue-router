<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  name: "TagDetail",

  data() {
    return {
      store,
      tagDetails: [],
      error: false,
      errorMessage: "",
    };
  },
  mounted() {
    this.getTagDetails();
  },

  methods: {
    getTagDetails() {
      let url =
        this.store.apiUrl +
        this.store.apiTagEndpoint +
        "/" +
        this.$route.params.id;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200 && result.data.success) {
            console.log(result.data.payload);
            this.tagDetails = result.data.payload;
          } else {
            console.error("There's an error");
            this.error = true;
            this.errorMessage = result.data.payload;
          }
        })
        .catch((errore) => {
          console.error(errore);
          this.$router.push({ name: "tags" });
        });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div v-if="error">{{ this.errorMessage }}</div>
      <div v-else>
        <h1 class="mb-3">Tag details {{ this.$route.params.id }}</h1>
        <div class="card h-100">
          <div class="card-header">{{ this.tagDetails.name }}</div>
          <div class="card-body">
            <p v-for="event in this.tagDetails.events">
              
                Event name: {{ event.name }} 
        
            </p>
            <router-link
             
              :to="{ name: 'tags'}">
              <div class="btn btn-danger text-black fw-bold">
                Return to tags
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
