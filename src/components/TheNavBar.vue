<template>
  <div id="the-nav-bar">
    <nav class="navbar" role="navigation" aria-label="main-navigation">
      <a target="_blank" href="http://developer.nytimes.com/" class="navbar-brand">
        <img id="nyt" class="navbar-item" src="../assets/nytimes.png" alt="">
      </a>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <div class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <router-link to="/">VYT Home</router-link>
                </li>
                <li v-if="isSection('/top')">
                  <router-link to="/top" aria-current="page">Top Stories</router-link>
                </li>
                <li v-if="isSection('/popular')">
                  <router-link to="/popular" aria-current="page">Most Popular</router-link>
                </li>
                <li v-if="isSection('/search')">
                  <router-link to="/search" aria-current="page">Search</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" v-on:click="toggleModal">About</a>
          <a class="navbar-item" href="mailto:ethan@ewmiller.me">Contact</a>
          <a class="navbar-item" target="_blank" href="https://github.com/ewmiller/vue-york-times">View on Github</a>
        </div>
      </div>
    </nav>
    <div v-if="modalActive" class="modal is-active">
      <div v-on:click="toggleModal" class="modal-background"></div>
      <div class="modal-content">
        <div class="box ">
            <h5 class="title is-5 has-text-centered">About the Site</h5>
            <hr>
            <p class="subtitle is-6">
              Vue York Times is a strictly non-commercial, open-source project.
              All article content and data is provided by The New York Times.
            </p>
            <hr>
            <div class="has-text-centered">
              <a target="_blank" href="http://developer.nytimes.com">
                <img src="http://static01.nytimes.com/packages/images/developer/logos/poweredby_nytimes_200c.png" alt="">
              </a>
            </div>
        </div>
      </div>
      <button v-on:click="toggleModal" class="modal-close is-large" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheNavBar',
    data () {
      return {
        modalActive: false
      }
    },
    methods: {
      isSection (section) {
        const path = this.$route.path;
        return (path === section);
      },
      toggleModal () {
        console.log("toggle modal")
        this.modalActive = !this.modalActive;
      }
    }
  }
</script>

<style scoped>
.navbar-brand {
  margin-left: 2em;
}
.breadcrumbs {
  padding: 0 !important;
  margin: 0 !important;
  vertical-align: center;
}

#nyt {
  padding: 0.75em;
}
</style>