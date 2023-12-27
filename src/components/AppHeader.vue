<template>
    <nav class="navbar">
      <RouterLink to="/">// Home</RouterLink>
      <RouterLink to="/projects">// Projects</RouterLink>
      <RouterLink to="/contact">// Contact</RouterLink>
    </nav>
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