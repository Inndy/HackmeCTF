<template>
  <div>
    <header>
      <h1>Hackme CTF</h1>
    </header>

    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/challenge" v-show="has_loggedin">Challenge</router-link>
      <router-link to="/login" v-show="!has_loggedin">Login</router-link>
      <router-link to="/register" v-show="!has_loggedin">Register</router-link>
      <router-link to="/logout" v-show="has_loggedin">Logout</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    has_loggedin () {
      return this.$root.user != null
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 2em;
}
</style>
