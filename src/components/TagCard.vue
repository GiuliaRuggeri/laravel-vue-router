<script>
export default {
  name: "TagCard",
  props: ["tag"],
};
</script>

<template>
  <div class="col-md-4 gy-4">
    <div class="card h-100">
      <div class="card-header">{{ tag.name }}</div>
      <div class="card-body">
        <router-link v-for="event in tag.events"
          :to="{ name: 'event-detail', params: { id: event.id } }"
       
        >
          <span class="badge bg-danger text-black me-2">{{ event.name }}</span>
        </router-link>
        <router-link
        :to="{ name: 'tag-detail', params: { id: tag.id } }"
        >
        <div class="btn btn-primary">Go to details</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
