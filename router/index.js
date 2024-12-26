import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Experiences from "@/views/Experiences.vue";
import Projects from "@/views/Projects.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/experiences', component: Experiences},
    {path: '/projets', component: Projects}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;