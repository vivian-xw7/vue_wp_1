<template>
    <div>
        <!-- <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm Vivian. I'm a web developer passionate about creating awesome web experiences.</p> -->

        <p>{{ introduction }}</p>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      introduction: '', // Initialize with an empty string
    };
  },
  mounted() {
    // Fetch data from WordPress API or other source
    this.fetchIntroduction();
  },
  methods: {
    async fetchIntroduction() {
      try {
        // Replace this URL with your WordPress API endpoint
        const response = await fetch('https://your-wordpress-site/wp-json/your-custom-endpoint');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        this.introduction = data.introduction; // Adjust the property name based on your API response
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
  