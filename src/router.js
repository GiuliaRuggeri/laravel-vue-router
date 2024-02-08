import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutUs from './pages/AboutUs.vue';
import EventList from './pages/EventList.vue';
import EventDetail from './pages/EventDetail.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUs
        },
        {
            path: '/events',
            name: 'events',
            component: EventList
        },
        {
            path: '/events/:id',
            name: 'event-detail',
            component: EventDetail
        }
    ]
});

export { router };