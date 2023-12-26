<template>
    <nav class="">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/projects">Projects</RouterLink> |
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterView />
    </nav>
</template>  


<script>
import { RouterView, RouterLink } from 'vue-router';

export default {
  components: {
    RouterView,
    RouterLink,
  },
};
</script>