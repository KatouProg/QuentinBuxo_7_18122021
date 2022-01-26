<template>
  <div class="home">
    <HelloWorld msg="" />
    <div class="container">
      <h1>Bienvenue</h1>
      <figure>
        <img
          id="img_home"
          src="../assets/img/icon-above-font2.png"
          alt="Logo du groupe Groupomania"
          title="Groupomania"
        />
      </figure>

      <a href="login" class="btn btn-danger btn-block max" >Se connecter</a><br /> 
      <a href="register" class="btn btn-danger btn-block max">S'inscrire</a>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">

h1 {
  font-size: 2rem;
}

img {
  width: 75%;
  margin-top: 4em;
  margin-bottom: 4em;
    @media screen and (min-width: 990px) {
      width: 50%;
    }
}

</style>