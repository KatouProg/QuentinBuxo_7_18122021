<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Se connecter</router-link> |
    <router-link to="/register">S'enregistrer</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #fc2c04;
    }
  }
}
</style>
