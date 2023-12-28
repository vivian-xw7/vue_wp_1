<template>
    <nav class="navbar py-8">
      <RouterLink class="nav-link " to="/">// Home</RouterLink>
      <RouterLink class="nav-link " to="/projects">// Projects</RouterLink>
      <RouterLink class="nav-link " to="/contact">// Contact</RouterLink>
    </nav>

    <!-- pulls in the rest of the site -->
    <RouterView />
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

<style scoped>
@import "../styles/navbar.css";
</style>