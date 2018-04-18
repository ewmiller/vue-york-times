<template>
  <div class="article-card">
    <a class="box" v-bind:href="article['url']">
      <article class="media">
        <div class="media-left">
          <figure class="image">
            <img v-bind:src="article['media'][0]['media-metadata'][0]['url']" alt="image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p class="title is-5">{{article.title}}</p>
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
  export default {
    name: 'ArticleCard',
    props: ['article']
  }
</script>

<style scoped>
.date {
  color: rgb(134, 134, 134);
}
</style>