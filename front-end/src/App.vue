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

body {
  font-family: 'NotoSans CJK TC', 'PingFang TC',
               'Microsoft YaHei', 'Microsoft JhengHei',
               'OpenSans', Helvetica, sans-serif;
  background-color: #555;
  color: #ddd;

  h1, h2, h3, h4, h5, h6 {
    color: #fff;
    text-shadow: 1px 1px .03em #333;
  }
}

.jumbotron {
  background-color: #333;
  color: #eee;
}
</style>
