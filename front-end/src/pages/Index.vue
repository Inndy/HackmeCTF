<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>Hackme CTF</h1>
      </div>
    </div>

    <div class="container">
      <div class="col-xs-12 col-md-8 col-lg-6">
        <router-link to="/login" class="btn btn-success btn-block play-now">
          Play Now
        </router-link>
      </div>

      <div class="col-xs-12">
        <h2>About This</h2>

        <p>This is a platform for CTF beginner! Enjoy your CTF :)</p>
        <p>If you have any problem about challenages, just contact me and don't be shy. :D</p>

        <h2>da da da da da</h2>

        <img class="image-responsive" src="https://i.giphy.com/HoffxyN8ghVuw.gif">

        <p>
          Good Luck!
          <span class="hidden-flag">FLAG{0h U C meeeeeeeeeeeeeeeeeeee!}</span>
        </p>
      </div>
    </div>

    <div v-html="'<style>nav.navbar { display: none; }</style>'"></div>
    <!-- Hack to hide navbar in homepage -->
  </div>
</template>

<style lang="scss">
.play-now {
  font-size: 2.4em;
  line-height: 2em;
}

.hidden-flag {
  opacity: 0;
  color: rgba(255, 255, 255, 0);
}
</style>
