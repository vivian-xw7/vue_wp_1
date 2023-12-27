<template>
    <nav class="navbar">
      <RouterLink class="nav-link mr-4" to="/">// Home</RouterLink>
      <RouterLink class="nav-link mr-4" to="/projects">// Projects</RouterLink>
      <RouterLink class="nav-link mr-4" to="/contact">// Contact</RouterLink>
    </nav>

    <!-- pulls in the rest of thhe site -->
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