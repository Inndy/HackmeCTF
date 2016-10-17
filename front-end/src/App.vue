<template>
  <div>
    <common-header></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

import CommonHeader from 'components/CommonHeader.vue'
import CommonFooter from 'components/CommonFooter.vue'

import FakeData from 'utils/FakeData'

export default {
  components: { CommonHeader, CommonFooter },
  created () {
    for(var i = 0; i < 32; i++)
      this.$root.challenges.push(FakeData.generate_challenge())
  },
  methods: {
    logout () {
      this.user = null
    }
  }
}
</script>

<style lang="scss">
@import 'bootstrap/css/bootstrap.min.css';
@import 'style/theme.scss';
</style>
