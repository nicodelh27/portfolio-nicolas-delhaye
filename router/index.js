import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Experiences from "@/views/Experiences.vue";
import Projects from "@/views/Projects.vue";
import Skills from "@/views/Skills.vue";
import Contact from "@/views/Contact.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/competences', component: Skills},
    {path: '/experiences', component: Experiences},
    {path: '/projets', component: Projects},
    {path: '/contact', component: Contact}

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;