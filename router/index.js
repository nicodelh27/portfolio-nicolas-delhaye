import { createRouter, createWebHistory } from 'vue-router';
import { useHead } from '@vueuse/head';
import Home from '@/views/Home.vue';
import Experiences from "@/views/Experiences.vue";
import Projects from "@/views/Projects.vue";
import Skills from "@/views/Skills.vue";
import Certications from "@/views/Certications.vue";
import Contact from "@/views/Contact.vue";

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: 'Portfolio Nicolas Delhaye | Développeur Junior - IUT de Lens',
            description: 'Découvrez mon portfolio, mes compétences, expériences, projets et trouvez tous mes contacts !'
        }
    },
    {
        path: '/competences',
        component: Skills,
        meta: {
            title: 'Compétences | Nicolas Delhaye - IUT de Lens',
            description: 'Explorez mes compétences en développement : langages de programmation, frameworks, outils et technologies maîtrisées.'
        }
    },
    {
        path: '/experiences',
        component: Experiences,
        meta: {
            title: 'Expériences | Nicolas Delhaye - IUT de Lens',
            description: 'Découvrez mes expériences professionnelles et mon parcours.'
        }
    },
    {
        path: '/projets',
        component: Projects,
        meta: {
            title: 'Projets | Nicolas Delhaye - IUT de Lens',
            description: 'Consultez mes projets réalisés et découvrez ce dont je suis capable !'
        }
    },
    {
        path: '/certifications',
        component: Certications,
        meta: {
            title: 'Certifications | Nicolas Delhaye - IUT de Lens',
            description: 'Découvrez les certifications que j\'ai obtenues !'
        }
    },
    {
        path: '/contact',
        component: Contact,
        meta: {
            title: 'Contactez-moi | Nicolas Delhaye - Développeur Junior',
            description: 'Vous êtes intéressés par mon profil ? N\'hésitez pas à me contacter pour toute question ou proposition.'
        }
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Update the page title and meta description on route change
router.afterEach((to) => {
    const { title, description } = to.meta;
    useHead({
        title,
        meta: [
            { name: 'description', content: description || '' },
        ],
    });
});

export default router;