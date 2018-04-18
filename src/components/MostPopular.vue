<template>
  <div id="most-popular">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/popular" aria-current="page">Most Popular</router-link>
        </li>
      </ul>
    </nav>
    
    <TitleHeading title="Most Popular" subtitle="Today's most-shared stories."></TitleHeading>

    <div class="loading" v-if="loading">
      <div class="section">
        <div class="container">
          <div class="has-text-centered">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="error" v-if="error">
      <div class="section">
        <div class="container">
          <div class="has-text-centered">
            <p>Error retrieving data from the Times.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-if="articles">
      <div class="container">
        <div class="columns" v-for="articles in chunkedArticles">
          <div class="column" v-for="article in articles">
            <ArticleCard v-bind:source="'popular'" v-bind:article="article"></ArticleCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleHeading from './TitleHeading.vue';
import ArticleCard from './ArticleCard.vue';

const axios = require('axios');
const chunk = require('chunk');

export default {
  name: 'MostPopular',
  components: {
    TitleHeading, ArticleCard
  },
  computed: {
    chunkedArticles: function() {
      return chunk(this.articles.results, 3);
    }
  },
  methods: {
    loadArticles () {
      this.loading = true;
      console.log("mounted");
      axios.get('https://vue-york-times-api.herokuapp.com/popular')
      .then((response) => {
        this.articles = response.data;
        this.loading = false;
      })
      .catch((error) => {
        console.log("Error retrieving data from NYT.");
        this.error = true;
        this.loading = false;
      });
    }
  },
  data () {
    return {
      loading: true,
      articles: null,
      error: false
    }
  },
  mounted () {
    this.loadArticles();
  }
}
</script>