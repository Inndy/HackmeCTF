<template>
  <div>
    <common-header></common-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'

import CommonHeader from './components/CommonHeader.vue'

export default {
  components: { CommonHeader },
  methods: {
    logout () {
      this.user = null
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: 'NotoSans CJK TC', 'PingFang TC',
               'Microsoft YaHei', 'Microsoft JhengHei',
               'OpenSans', Helvetica, sans-serif;
}
</style>
