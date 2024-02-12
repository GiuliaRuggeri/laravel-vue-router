<script>
import { store } from "../store";
import axios from "axios";
import TagCard from "../components/TagCard.vue";

export default {
  name: "TagList",

  components: {
    TagCard
  },

  data() {
    return {
      store,
    };
  },
  mounted() {
    this.getTagList();
  },
  methods: {
    getTagList() {
      let url = this.store.apiUrl + this.store.apiTagEndpoint;

      axios
        .get(url)
        .then((result) => {
          if (result.status === 200 && result.data.success) {
            console.log(result.data.payload);
            this.store.tagList = result.data.payload;
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
 <div>
    <div class="container">
      <div class="row">
        <h1>Tags list</h1>
        <TagCard v-for="tag in store.tagList" :tag="tag"/>
      </div>
    </div>
  </div>

</template>
<style scoped></style>
