<template>
    <div>
      <p>{{ introduction }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        introduction: '',
      };
    },
    mounted() {
      // Fetch data from WordPress API
      this.fetchIntroduction();
    },
    methods: {
      async fetchIntroduction() {
        try {
          const response = await fetch('http://vue-wp.local/wp-json/');
  
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
  
          const data = await response.json();
          this.introduction = data.content.rendered; // Adjust the property name based on your API response
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  