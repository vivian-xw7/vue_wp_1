<template>
    <div class="container">
      <h1 class="hdg-1">Vivian Hayes</h1>
      <!-- <h2>Welcome to My Portfolio</h2> -->
      <!-- <p>Hi, I'm Vivian. I'm a web developer passionate about creating awesome web experiences.</p> -->
      <!-- <p class="hdg-1">heading 1</p>
      <p class="hdg-2">heading 2</p>
      <p class="hdg-3">heading 3</p>
      <p class="hdg-4">heading 4</p>
      <p class="hdg-5">heading 5</p>
      <p class="hdg-6">heading 6</p>

      <p class="type-large">large</p>
      <p class="type-base">base</p>
      <p class="type-small">small</p> -->
    </div>

    <div class="container">
      <p v-if="isLoading">Loading...</p>
      <ul v-for="p in post" :key="p.id">
        <li class="hdg-6">{{ p.title.rendered }}</li>
        <div v-html="p.content.rendered"></div>
        <p class="date">{{ p.createdAt }}</p>
      </ul>
    </div>

    <!-- <div>
      <p>{{ introduction }}</p>
    </div> -->
  </template>
  
<script>
  export default {
    data() {
      return {
        post: [],
        isLoading: false,
      };
    },
    methods: {
      getPosts() {
        this.isLoading = true;
        fetch("http://vue-wp.local/wp-json/wp/v2/posts")
          .then((response) => response.json())
          .then((data) => {
            this.post = data;
            this.isLoading = false;
          });
      },
    },
    mounted() {
      this.getPosts();
    },
  };
  // export default {
  //   name: 'HomeView',
  //   data() {
  //     return {
  //       introduction: '',
  //     };
  //   },
  //   mounted() {
  //     // Fetch data from WordPress API
  //     this.fetchIntroduction();
  //   },
  //   methods: {
  //     async fetchIntroduction() {
  //       try {
  //         const response = await fetch('http://vue-wp.local/wp-json/wp/v2/posts'); // fetches the API of the site
  
  //         if (!response.ok) {
  //           throw new Error('Failed to fetch data');
  //         }
  
  //         const data = await response.json();
  //       //   console.log('API Response:', data)

  //         this.introduction = data.description;


  //       //   this.introduction = data.content.rendered; // Adjust the property name based on your API response
  //       } catch (error) {
  //         console.error('Error fetching data:', error);
  //       }
  //     },
  //   },
  // };
</script>
  
  <style scoped>
  @import "../styles/typography.css";
  </style>
  