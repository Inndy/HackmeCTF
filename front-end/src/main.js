import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'

import 'jquery'
import './bootstrap/js/bootstrap.min.js'

Vue.use(VueRouter)
Vue.filter('categories', x => x.join(', '))

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/',              name: 'home',           component: require('./pages/Index.vue') },
    { path: '/login',         name: 'login',          component: require('./pages/Login.vue') },
    { path: '/logout',        name: 'logout',         component: require('./pages/Logout.vue') },
    { path: '/register',      name: 'register',       component: require('./pages/Register.vue') },
    { path: '/challenge',     name: 'list-challenge', component: require('./pages/ChallengeList.vue') },
    { path: '/challenge/:id', name: 'challenge',      component: require('./pages/Challenge.vue') },
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
