<script>
export default {
    name: "EventCard",
    props: ["event"]
}
</script>

<template>
    <div class="col-md-4 gy-4">
        <div class="card h-100">
            <div class="card-header">{{ event.date }}</div>
            <div class="card-body">
                <h5 class="card-title">{{ event.name }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                    {{ event.user ? event.user.name : "Unidentified User" }}
                </h6>
                <p class="card-text">There are still <b>{{ event.available_tickets }}</b> tickets available.
                </p>
            </div>
            <div class="card-footer text-center">
                <router-link :to="{ name: 'event-detail', params: { id: event.id } }" class="btn btn-primary">
                    <font-awesome-icon icon="fa-solid fa-circle-info" class="me-2" />
                    <span>Details</span>
                </router-link>
            </div>
        </div>
    </div>
</template>