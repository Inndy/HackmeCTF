<template>
  <div class="container">
    <div class="page">
      <div class="clearfix">
        <h2 class="pull-left name">
          {{challenge.name}}
        </h2>
        <p class="pull-right">{{ challenge.solved_count }} Solved</p>
      </div>

      <h4>{{challenge.categories | categories}}</h4>

      <p>
        Link: <a :href="challenge.url">{{ challenge.url | url_text }}</a>
      </p>

      <div class="description" v-html="challenge.description"></div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    var id = parseInt(this.$route.params.id, 10)
    this.challenge = this.$root.challenges[id]
  },
  data () {
    return {
      challenge: null
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  margin: 1em;
  padding: 1em;
  border: 1px solid black;
  background-color: #1f2f38;
  color: #ccc;

  h1, h2, h3, h4, h5, h6 {
    margin: .6em 0;
    color: #e7e7e7;
  }

  .name > a {
    color: inherit;
  }
}
</style>
