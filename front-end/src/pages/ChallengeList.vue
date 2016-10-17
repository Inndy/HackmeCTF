<template>
  <div class="container">
    <div v-for="chall in $root.challenges" class="challenge col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <router-link :to="'/challenge/' + chall.id" class="box">
        <h3>{{chall.name}}</h3>
        <p class="categories">{{chall.categories | categories}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$root.challenges)
  }
}
</script>

<style lang="scss" scoped>
.challenge {
  margin-bottom: 2em;

  a {
    color: inherit;
    text-decoration: none;
  }

  .box {
    display: inline-block;
    width:: 100%;
    height: 100%;
    padding: 1.5em;
    background-color: #2777ab;
    text-align: center;
  }
}
</style>
