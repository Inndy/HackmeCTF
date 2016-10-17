<template>
  <div>
    <header class="jumbotron">
      <div class="container">
        <h1>Hackme Pls</h1>
      </div>
    </header>

    <div class="container">
      <nav class="navbar navbar-default navbar-inverse">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li><router-link active-class="active" exact to="/">Home</router-link></li>
            <li><router-link active-class="active" exact to="/challenge" v-show="has_loggedin">Challenges</router-link></li>
            <li><router-link active-class="active" exact to="/login" v-show="!has_loggedin">Login</router-link></li>
            <li><router-link active-class="active" exact to="/register" v-show="!has_loggedin">Register</router-link></li>
            <li><router-link active-class="active" exact to="/logout" v-show="has_loggedin">Logout</router-link></li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li v-if="has_loggedin">
              <p class="navbar-text">
                <span class="username">{{$root.user.name}}</span>
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
nav.navbar {
  background-color: #1a2933;
  .active {
    font-weight: bold;
    color: #fff;
  }
}

.username {
  color: #eef;
  font-weight: bold;
}
</style>
