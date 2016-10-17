<template>
  <div class="container">
    <div v-for="(chall, idx) in $root.challenges"
         class="challenge col-xs-12 col-sm-6 col-md-4 col-lg-3"
         :class="{solved: chall.solved}">
      <router-link :to="'/challenge/' + idx" class="box">
        <h3 class="name">{{chall.name}}</h3>
        <p class="categories">{{chall.categories | categories('')}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  created() {
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
    padding: 1.5em .5em;
    background-color: #2777ab;
    text-align: center;
  }

  &.solved {
    .box {
      background-color: #696969; //#27ab65;
      color: #ccc;
      .name {
        color: inherit;
        text-decoration: line-through;
      }
    }
  }
}
</style>
