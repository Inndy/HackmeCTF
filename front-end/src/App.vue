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
import { WeakPRNG } from './utils/PRNG'

import CommonHeader from './components/CommonHeader.vue'
import CommonFooter from './components/CommonFooter.vue'

export default {
  components: { CommonHeader, CommonFooter },
  created () {
    var I = 0
    var prng = new WeakPRNG()
    function mkname(i) {
      const PREFIXES = 'Baby,Easy,Trivial,Revenge,Hard,Hell,Very'.split(/,/g)
      const NAMES = 'PPAP,Web,Guestbook,Homework,SQLi,Overflow,BoF,ROP,Heap,Calc,Math,RSA,DES,AES'.split(/,/g)
      const SUFFIX = '-ng,,,,'.split(/,/g)
      if(i == 1) {
        return 'Flag'
      } else {
        return `${prng.choice(PREFIXES)} ${prng.choice(NAMES)}${prng.choice(SUFFIX)}`
      }
    }
    function categories(i, n) {
      if(i == 1)
        return ['Flag']
      const CATEGORIES = ['Misc', 'Web', 'Forensic', 'Reverse', 'Pwn', 'Crypto', 'PPC']
      return prng.shuffle(Array.from(CATEGORIES)).slice(0, n)
    }
    function gen() {
      I++
      return {
        id: I,
        name: mkname(I),
        categories: categories(I, 1 + ~~(Math.random() * 4)),
        solved: prng.next() % 3 == 1
      }
    }
    for(var i = 0; i < 32; i++)
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
