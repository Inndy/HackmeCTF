<template>
  <div class="container">
    <h1>Login</h1>
    <button @click="do_login" class="btn btn-primary">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    do_login () {
      this.$root.user = { name: 'Inndy', token: '123123123123' }
      this.$router.push('/challenge')
    }
  }
}
</script>
