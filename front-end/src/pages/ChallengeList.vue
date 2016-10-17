<template>
  <div>
    <h1>Challenge List</h1>

    <ul>
      <li v-for="chall in challenges">
        <router-link :to="'/challenge/' + chall.id">{{chall.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created () {
    for(var i = 0; i < 10; i++)
      this.challenges.push({id: i, name: `chall ${i}`})
  },
  computed: {
    challenges () {
      return this.$root.challenges
    }
  }
}
</script>
