<template>
  <div id="home-page">

    <TitleHeading title="The Vue York Times" subtitle="A minimalist approach to the news. Powered by Vue.js."></TitleHeading>
    
    <div id="categories">
      <div class="section">
        <div class="container">
          <div class="columns">

            <div class="column">
              <router-link class="box" to="/popular">
                <article class="media">
                  <div class="media-content">
                    <div class="content has-text-centered">
                      <h3 class="title is-5">Most Popular</h3>
                      <p class="subtitle is-6">The stories people are talking about.</p>
                    </div>
                  </div>
                </article>
              </router-link>
            </div>

            <div class="column">
              <router-link class="box" to="/top">
                <article class="media">
                    <div class="media-content">
                      <div class="content has-text-centered">
                        <h3 class="title is-5">Top Stories</h3>
                        <p class="subtitle is-6">Hand-picked articles from the editors.</p>
                      </div>
                    </div>
                  </article>
              </router-link>
            </div>
            <div class="column">
              <router-link class="box" to="/search">
                <article class="media">
                    <div class="media-content">
                      <div class="content has-text-centered">
                        <h3 class="title is-5">Search</h3>
                        <p class="subtitle is-6">Search articles by keyword.</p>
                      </div>
                    </div>
                  </article>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleHeading from './TitleHeading.vue';

export default {
  name: 'HomePage',
  components: {TitleHeading}
}
</script>

<style scoped>

</style>