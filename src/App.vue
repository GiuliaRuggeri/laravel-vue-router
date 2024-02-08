<script>
import Header from "./components/Header.vue";

import axios from "axios"; //importo Axios
import { store } from "./store.js"; //state management

export default {
  components: {
	Header
  
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    this.getEventList();
  },
  methods: {
    getEventList() {
      let url = this.store.apiUrl + this.store.apiEventEndpoint;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200 && result.data.success) {
            console.log(result.data.payload);
            this.store.eventList = result.data.payload;
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
	<Header />
  <main>
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use "./styles/general.scss";
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
  padding: 1rem;
}
</style>
