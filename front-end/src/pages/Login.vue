<template>
  <div class="container">
    <h1>Login</h1>
    <button @click="do_login" class="btn btn-primary">Login</button>
  </div>
</template>

<script>
export default {
  created () {
    if (this.$root.user)
      this.$router.push('/challenge')

  },
  methods: {
    do_login () {
      this.$root.user = { name: 'Inndy', token: '123123123123', pts: 1000 }
      this.$router.push('/challenge')
    }
  }
}
</script>
