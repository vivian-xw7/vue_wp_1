<template>
  <div id="app">
    <AppHeader />

    <HomePage />

    <AppFooter />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
/* Your styles for the App component */
</style>

<!-- C:\Users\Vivian\Local Sites\vue-wp\app\public\wp-content\themes\vue_wp_1\src\components\AppHeader.vue -->