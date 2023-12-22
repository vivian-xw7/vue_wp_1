<template>
    <div class="">
        <RouterView />
            <RouterLink to="/">Home</RouterLink> |
            <RouterLink to="/my-projects">Projects</RouterLink> |
            <RouterLink to="/contact-me">Contact</RouterLink>
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