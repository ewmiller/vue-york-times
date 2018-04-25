<template>
  <div class="article-card">
    <a class="box" v-bind:href="article['url']">
      <article class="media">
        <div class="media-left">
          <figure v-if="source === '/popular'" class="image">
            <img v-bind:src="getPopularArticleImage(article)" alt="image">
          </figure>
          <figure v-if="source === '/top'" class="image">
            <img v-bind:src="getTopArticleImage(article)" alt="image">
          </figure>
          <figure v-if="source === '/search'" class="image">
            <img v-bind:src="getSearchArticleImage(article)" alt="">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <div v-if="source === '/search'">
              <p class="title is-5">{{article.headline.main}}</p>
              <hr>
              <p class="subtitle is-6">{{article.snippet}}</p>
              <p class="date">
                <span v-if="article.byline.original !== undefined">
                  {{article.byline.original}}.
                </span>
                <span v-if="article.pub_date !== undefined">
                  {{formatDate(article.pub_date)}}
                </span>
              </p>
            </div>
            <div v-else>
              <p class="title is-5">{{article.title}}</p>
              <hr>
              <p class="subtitle is-6">{{article.abstract}}</p>
              <p class="byline">
                <span v-if="article.byline !== undefined">{{article.byline}}.</span> 
                <span v-if="article.published_date !== undefined">{{formatDate(article.published_date)}}.</span>
              </p>
            </div>
          </div>
        </div>
      </article>
    </a>
  </div>
</template>

<script>

const img = require('../assets/nytimeslogo.png');
const dateformat = require('dateformat');

export default {
  name: 'ArticleCard',
  props: ['article', 'source'],
  computed: {
    isPopular () {
      return (this.source === '/popular');
    }
  },
  methods: {
    getSearchArticleImage (article) {
      let src;
      try {
        src = 'https://nyt.com/' + article['multimedia'][2]['url'];
      } catch (err) {
        src = img;
      }
      return src;
    },
    getTopArticleImage (article) {
      let src;
      try {
        src = article['multimedia'][0]['url'];
      } catch (err) {
        src = img;
      }
      return src;
    },
    getPopularArticleImage (article) {
      let src;
      try {
        src = article['media'][0]['media-metadata'][0]['url'];
      } catch (err) {
        src = img;
      }
      return src;
    },
    formatDate(date) {
      return dateformat(date, "mmmm dd, yyyy");
    }
  }
}
</script>

<style scoped>
.byline {
  color: rgb(134, 134, 134);
}
</style>