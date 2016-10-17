<template>
  <footer>
    <div class="container">
      <p>
        Copyright &copy; 2016 Inndy Lin, MIT licesned.
        Source code available on <a href="https://github.com/inndy/HackmeCTF">GitHub</a>.
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
body {
  &>div {
    min-height: 100vh;
    padding-bottom: 8rem;
    position: relative;
  }
}
</style>

<style lang="scss" scoped>
footer {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: 1em;
}

p {
  margin: 0;
  padding: 2rem 0;
  line-height: 2rem;
  font-size: .8em;
}
</style>
