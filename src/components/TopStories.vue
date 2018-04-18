<template>
  <div id="top-stories">

    <TitleHeading title="Top Stories" subtitle="Curated articles from the NYT staff."></TitleHeading>
    <ArticleView v-bind:section="'/top'"></ArticleView>

  </div>
</template>

<script>
import TitleHeading from './TitleHeading';
import ArticleView from './ArticleView.vue';

export default {
  name: 'TopStories',
  components: {TitleHeading, ArticleView}
}
</script>