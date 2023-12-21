<template>
    <RouterView />
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="MyProjects">Projects</RouterLink> |
        <RouterLink to="ContactMe">Contact</RouterLink>
    <RouterView />
</template>


<script>
import { RouterView, RouterLink } from 'vue-router';
// import ContactMe from './ContactMe.vue';
// import MyProjects from './MyProjects.vue';

export default {
  components: {
    RouterView,
    RouterLink,
    // ContactMe,
    // MyProjects
  },
};
</script>