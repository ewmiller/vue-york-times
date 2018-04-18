<template>
  <div id="article-view">
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
              <ArticleCard v-bind:source="section" v-bind:article="article"></ArticleCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue';

const axios = require('axios');
const chunk = require('chunk');

export default {
  name: 'MostPopular',
  components: {
    ArticleCard
  },
  computed: {
    chunkedArticles: function() {
      return chunk(this.articles.results, 3);
    }
  },
  methods: {
    loadArticles () {
      this.loading = true;
      const url = 'https://vue-york-times-api.herokuapp.com/' + this.section;
      axios.get(url)
      .then((response) => {
        console.log("Recieved response from NYT.");
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
  props: ['section'],
  mounted () {
    this.loadArticles();
  }
}
</script>