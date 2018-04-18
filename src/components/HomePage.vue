<template>
  <div id="home-page">
    <div class="section">
      <div class="container">
        <section class="hero">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">The Vue York Times</h1>
              <h2 class="subtitle">A minimalist approach to the news. Powered by Vue.js.</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
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
                      <p class="subtitle is-6">The most viewed and shared stories.</p>
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
                        <p class="subtitle is-6">Hand-picked stories from the editors.</p>
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

</script>

<style scoped>

</style>