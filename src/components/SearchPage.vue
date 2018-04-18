<template>
  <div id="search-page">
    <!-- <TitleHeading title="Search" subtitle="Search all NYT articles by keyword(s)."></TitleHeading> -->

    <div id="search-bar">
      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column"></div>
            <div class="column has-text-centered">
              <div class="field">
                <label class="label">Enter Search Terms</label>
                <div class="control has-icons-right">
                  <span class="icon is-right">
                    <i class="fas fa-search"></i>
                  </span>
                  <input v-model="searchTerms" type="text" class="input" placeholder="e.g. NBA playoffs">
                </div>
                <br>
                <button v-on:click="search" class="button is-info">Search</button>
              </div>
            </div>
            <div class="column"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="articles" v-if="showSearch">
      <ArticleView v-bind:section="'/search'" v-bind:searchTerms="searchTerms"></ArticleView>
    </div>
  </div>
</template>

<script>
import TitleHeading from './TitleHeading.vue';
import ArticleView from './ArticleView.vue';

const axios = require('axios');
const chunk = require('chunk');

export default {
  name: 'SearchPage',
  components: {TitleHeading, ArticleView},
  data () {
    return {
      searchTerms: "",
      searchString: "",
      showSearch: false
    }
  },
  methods: {
    search () {
      this.showSearch = false;
      this.showSearch = true;
    }
  }
}
</script>