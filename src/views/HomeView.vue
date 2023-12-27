<template>
    <div>
      <h1 class="hdg-1">Vivian Hayes</h1>
      <h2>Welcome to My Portfolio</h2>
      <p>Hi, I'm Vivian. I'm a web developer passionate about creating awesome web experiences.</p>
    </div>

    <!-- <div>
      <p>{{ introduction }}</p>
    </div> -->
  </template>
  
  <script>
  export default {
    name: 'HomeView',
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
          const response = await fetch('http://vue-wp.local/wp-json/'); // fetches the API of the site
  
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
  
          const data = await response.json();
        //   console.log('API Response:', data)

          this.introduction = data.description;


        //   this.introduction = data.content.rendered; // Adjust the property name based on your API response
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import "../styles/typography.css";
  </style>
  