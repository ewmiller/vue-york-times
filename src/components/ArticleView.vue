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
  name: 'ArticleView',
  components: {
    ArticleCard
  },
  computed: {
    chunkedArticles: function() {
      return chunk(this.articles, 3);
    }
  },
  methods: {
    loadArticles () {
      this.loading = true;
      var url = 'http://localhost:3000' + this.section;
      if(this.section === '/search'){
        url = url + '/' + this.searchTerms;
      }
      axios.get(url)
      .then((response) => {
        console.log("Recieved response from API.");
        if(this.section === '/popular' || this.section === '/top'){
          this.articles = response.data.results;
        } else {
          this.articles = response.data.response.docs;
        }
        this.loading = false;
      })
      .catch((error) => {
        console.log("Error retrieving data from API.");
        console.log(error);
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
  props: ['section', 'searchTerms'],
  mounted () {
    this.loadArticles();
  }
}
</script>