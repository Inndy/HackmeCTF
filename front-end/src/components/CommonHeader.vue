<template>
  <div>
    <div class="container">
      <nav class="navbar navbar-default">
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
                Hackme Pls
              </router-link>
            </div>
          </div>

          <div class="navbar-collapse collapse" id="collapse-menu">
            <ul class="nav navbar-nav">
              <li>
                <router-link active-class="active" exact to="/">
                  Home
                </router-link>
              </li>
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
                <p class="navbar-text">
                  <router-link active-class="active" exact to="/profile" class="username">
                    <span>{{$root.user.name}}</span>
                  </router-link>
                  ({{$root.user.pts}} pts)
                </p>
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
  border-top: 0;
  border-radius: 0 0 4px 4px;

  .navbar-brand > * {
    color: #fff;
    font-weight: bold;
  }
}

.username {
  color: #eef;
  font-weight: bold;
}
</style>
