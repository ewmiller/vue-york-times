<template>
  <div class="article-card">
    <a class="box" v-bind:href="article['url']">
      <article class="media">
        <div class="media-left">
          <figure v-if="source === '/popular'" class="image">
            <img v-bind:src="article['media'][0]['media-metadata'][0]['url']" alt="image">
          </figure>
          <figure v-if="source === '/top'" class="image">
            <img v-bind:src="article['multimedia'][0]['url']" alt="image">
          </figure>
          <figure v-if="source === '/search'" class="image">
            <img v-bind:src="getSearchArticleImage(article)" alt="">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p v-if="source === '/search'" class="title is-5">{{article.headline.main}}</p>
            <p v-else class="title is-5">{{article.title}}</p>
            <hr>
            <p class="subtitle is-6">{{article.abstract}}</p>
            <p class="date">{{article.byline}}. {{article.published_date}}</p>
          </div>
        </div>
      </article>
    </a>
  </div>
</template>

<script>
  const img = require('../assets/nytimeslogo.png');

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
        // return 'https://nyt.com/' + article['multimedia'][2]['url']
        if(article['multimedia'].length > 0){
          return 'https://nyt.com/' + article['multimedia'][2]['url'];
        } else {
          return img;
        }
      }
    }
  }
</script>

<style scoped>
.date {
  color: rgb(134, 134, 134);
}
</style>