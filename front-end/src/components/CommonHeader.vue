<template>
  <div>
    <div>
      <nav class="navbar navbar-default navbar-static-top">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-menu">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <div class="navbar-brand">
              <router-link to="/">
                Hackme CTF
              </router-link>
            </div>
          </div>

          <div class="navbar-collapse collapse" id="collapse-menu">
            <ul class="nav navbar-nav">
              <li>
                <router-link active-class="active" exact to="/challenge" v-show="has_loggedin">
                  Challenges
                </router-link>
              </li>
              <li>
                <router-link active-class="active" exact to="/login" v-show="!has_loggedin">
                  Login
                </router-link>
              </li>
              <li>
                <router-link active-class="active" exact to="/register" v-show="!has_loggedin">
                  Register
                </router-link>
              </li>
              <li>
                <router-link active-class="active" exact to="/logout" v-show="has_loggedin">
                  Logout
                </router-link>
              </li>
            </ul>

            <ul class="nav navbar-nav navbar-right">
              <li v-if="has_loggedin">
                <router-link active-class="active" exact to="/profile" class="username">
                  <span>{{$root.user.name}}</span>
                  ({{$root.user.pts}} pts)
                </router-link>
              </li>
              <li>
                <a href="https://telegram.me/joinchat/A4vRIj-Ij-OMbpaLitQKCg">Offical Chat Room</a>
              </li>
              <li>
                <a href="https://www.inndy.tw/" target="_blank">Author</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    has_loggedin () {
      return this.$root.user != null
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  .navbar-brand > * {
    color: #fff;
    font-weight: bold;
  }
}

.username > span {
  color: #eef;
  font-weight: bold;
}
</style>
