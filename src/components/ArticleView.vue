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
    <transition name="fade">
      <div class="section" v-if="articles">
        <div class="container">
          <div class="columns" v-for="(articles, chunkIndex) in chunkedArticles" v-bind:key="chunkIndex">
            <div class="column" v-for="(article, articleIndex) in articles" v-bind:key="articleIndex">
              <article-card v-bind:source="section" v-bind:article="article"></article-card>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ArticleCard from './ArticleCard.vue';

const axios = require('axios');
const chunk = require('chunk');

export default {
  name: 'ArticleView',
  components: {
    'article-card': ArticleCard
  },
  computed: {
    chunkedArticles: function() {
      return chunk(this.articles, 3);
    }
  },
  methods: {
    loadArticles () {
      this.loading = true;
      var url = process.env.BASE_ENDPOINT + this.section;
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
