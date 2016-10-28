import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'

import 'jquery'
import './bootstrap/js/bootstrap.min.js'

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.filter('categories', (x, prefix) => (prefix == undefined ? 'Categories: ' : prefix) + x.join(', '))

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    { path: '/',              component: require('./pages/Index.vue') },
    { path: '/login',         component: require('./pages/Login.vue') },
    { path: '/logout',        component: require('./pages/Logout.vue') },
    { path: '/register',      component: require('./pages/Register.vue') },
    { path: '/profile',       component: require('./pages/Profile.vue') },
    { path: '/challenge',     component: require('./pages/ChallengeList.vue') },
    { path: '/challenge/:id', component: require('./pages/Challenge.vue') },
  ]
})

new Vue({
  router,
  el: '#app',
  data () {
    return {
      user: null,
      challenges: []
    }
  },
  methods: {
    logout () {
      this.user = null
    }
  },
  render: r => r(App),
})
