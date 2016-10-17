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

import CommonHeader from './components/CommonHeader.vue'
import CommonFooter from './components/CommonFooter.vue'

export default {
  components: { CommonHeader, CommonFooter },
  created () {
    var I = 0
    var S = 12345 + (new Date())
    function rand() {
      S = ((S * 1103515245) & 0x7fffffff) + 12345
      return S & 0xffff;
    }
    function shuffle(arr) {
      for(var i = 0; i < arr.length; i++) {
        var t = rand() % arr.length
        var T = arr[t]
        arr[t] = arr[i]
        arr[i] = T
      }
      return arr
    }
    function categories(n) {
      const CATEGORIES = ['Misc', 'Web', 'Forensic', 'Reverse', 'Pwn', 'Crypto', 'PPC'];
      return shuffle(Array.from(CATEGORIES)).slice(0, n)
    }
    function gen() {
      return {
        id: ++I,
        name: `Challenge ${i}`,
        categories: categories(1 + ~~(Math.random() * 4))
      }
    }
    for(var i = 0; i < 10; i++)
      this.$root.challenges.push(gen())
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
