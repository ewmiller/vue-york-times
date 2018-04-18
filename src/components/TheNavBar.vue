<template>
  <div id="the-nav-bar">
    <nav class="navbar" role="navigation" aria-label="main-navigation">
      <div class="navbar-brand">
        <span class="navbar-item"><strong>VYT</strong></span>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <div class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li v-if="isSection('/top')">
                  <router-link to="/top" aria-current="page">Top Stories</router-link>
                </li>
                <li v-if="isSection('/popular')">
                  <router-link to="/popular" aria-current="page">Most Popular</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="navbar-end">
          <a class="navbar-item" href="#">About</a>
          <a class="navbar-item" href="mailto:ethan@ewmiller.me">Contact</a>
          <a class="navbar-item" target="_blank" href="https://github.com/ewmiller/vue-york-times">View on Github</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'TheNavBar',
    methods: {
      isSection (section) {
        const path = this.$route.path;
        return (path === section);
      }
    }
  }
</script>

<style scoped>
.navbar-brand {
  padding-left: 2em;
}
.breadcrumbs {
  padding: 0 !important;
  margin: 0 !important;
  vertical-align: center;
}
</style>