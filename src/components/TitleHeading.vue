<template>
  <div class="title-heading">
    <div class="section">
        <div class="container">
          <section class="hero">
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title">{{title}}</h1>
                <h2 class="subtitle">{{subtitle}}</h2>
              </div>
            </div>
          </section>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TitleHeading',
  props: ['title', 'subtitle']
}
</script>