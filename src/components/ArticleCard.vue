<template>
  <div class="article-card">
    <a target="_blank" class="box" v-on:click="launchSummary">
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
    <div class="modal is-active" v-if="modalOpen">
      <div class="modal-background" v-on:click="modalOpen = !modalOpen"></div>
      <div class="modal-content">
        <div class="box">
          <p class="title is-5 modal-title" v-if="source === '/search'">{{article.headline.main}}</p>
          <p class="title is-5 modal-title" v-else>{{article.title}}</p>
          <p class="subtitle is-6">{{articleByLine}}</p>
          <p class="subtitle is-6"><a v-bind:href="articleUrl" target="_blank">View full article</a></p>
          <hr>
          <p>{{summary}}</p>
          <br>
          <p><span class="disclaimer">Article summary provided by SMMRY.</span></p>
          <br>
        </div>
      </div>
      <button class="modal-close is-large" v-on:click="modalOpen = !modalOpen" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
const axios = require('axios')

const img = require('../assets/nytimeslogo.png')
const dateformat = require('dateformat')

export default {
  name: 'article-card',
  props: ['article', 'source'],
  data () {
    return {
      summary: "",
      modalOpen: false
    }
  },
  computed: {
    isPopular () {
      return (this.source === '/popular');
    },
    articleUrl () {
      if (this.source === '/search'){
        return this.article["web_url"]
      } else {
        return this.article["url"]
      }
    },
    articleByLine () {
      if (this.source === '/search'){
        return this.article.byline.original
      } else {
        return this.article.byline
      }
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
    },
    launchSummary () {
      const url = process.env.BASE_ENDPOINT + "/summary?article=" + this.articleUrl
      console.log("Getting summary: " + url)
      axios.get(url).then((response) => {
        console.log(response)
        if (response.status == 200){
          this.summary = response.data
          this.modalOpen = true
        } else {
          this.summary = "Error retrieving summary from SMMRY. For now, feel free to read the full article, but let me know if the issue persists! github.com/ewmiller"
        }
      })
    }
  }
}
</script>