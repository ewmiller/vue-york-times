<template>
  <div id="the-nav-bar">
    <nav class="navbar" role="navigation" aria-label="main-navigation">
      <div class="navbar-brand">
        <span class="navbar-item"><strong>VYT</strong></span>
      </div>
      <div class="navbar-menu"> 
        <div class="navbar-end">
          <a class="navbar-item" href="#">About</a>
          <a class="navbar-item" href="#">Contact</a>
          <a class="navbar-item" href="#">View on Github</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'TheNavBar'
  }
</script>

<style scoped>
.navbar-brand {
  padding-left: 2em;
}
</style>