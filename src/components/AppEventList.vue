<script>
import { store } from "../store.js" //state management

export default {
    name: "AppEventList",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
     <div>
        <h1>Events list</h1>

        <div class="container">
            <div class="row">

                <div class="col-md-4 gy-4" v-for="event in store.eventList">
                    <div class="card h-100">
                        <div class="card-header">{{ event.date }}</div>
                        <div class="card-body">
                            <h5 class="card-title">{{ event.name }}</h5>
                            <p v-for="tag in event.tags">{{ tag.name }}</p>
                            <h6 class="card-subtitle mb-2 text-muted">{{ event.user.name }}</h6>
                            <p class="card-text">There are still <b>{{ event.available_tickets }}</b> tickets available.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>