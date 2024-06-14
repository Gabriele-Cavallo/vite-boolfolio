import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';
import AppContactUs from './pages/AppContactUs.vue';
import AppTermsAndConditions from './pages/AppTermsAndConditions.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
        path: '/',
        name: 'home',
        component: AppHome
        },
        {
        path: '/about',
        name: 'about',
        component: AppAbout
        },
        {
        path: '/projects',
        name: 'projects',
        component: ProjectsList
        },
        {
        path: '/projects/:slug',
        name: 'single-project',
        component: SingleProject
        },
        {
        path: '/contact-us',
        name: 'contact-us',
        component: AppContactUs
        },
        {
        path: '/terms-and-conditions',
        name: 'terms-and-conditions',
        component: AppTermsAndConditions
        },
        {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
        },
    ]
});
export { router };