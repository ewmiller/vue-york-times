<template>
  <div id="most-popular">
    
    <TitleHeading title="Most Popular" subtitle="Today's most-shared stories."></TitleHeading>
    <ArticleView v-bind:section="'popular'"></ArticleView>

  </div>
</template>

<script>
import TitleHeading from './TitleHeading.vue';
import ArticleView from './ArticleView.vue';

export default {
  name: 'MostPopular',
  components: {
    TitleHeading, ArticleView
  }
}
</script>