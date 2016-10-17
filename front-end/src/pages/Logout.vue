<template></template>

<script>
export default {
  created () {
    this.$root.logout()
    this.$router.push('/')
  }
}
</script>
