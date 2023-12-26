<template>
    <div class="">
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/projects">Projects</RouterLink> |
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterView />
    </div>
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