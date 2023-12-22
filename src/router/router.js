import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import MyProjects from '../components/MyProjects.vue';
import ContactMe from '../components/ContactMe.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/my-projects',
    component: MyProjects,
  },
  {
    path: '/contact-me',
    component: ContactMe,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
