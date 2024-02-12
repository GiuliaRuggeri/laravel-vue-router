<script>
export default {
    name: "Header",
    data() {
        return {
            menuItems: [
                {
                    routeName: "home",
                    label: "Homepage"
                },
                {
                    routeName: "about",
                    label: "About us"
                },
                {
                    routeName: "events",
                    label: "Events"
                },
                {
                    routeName: "tags",
                    label: "Tags"
                }
            ]
        }
    },
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><b>Logo</b></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" v-for="(item, index) in menuItems" :key="index">
                            <router-link :to="{ name: item.routeName }" class="nav-link">
                                {{ item.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped></style>