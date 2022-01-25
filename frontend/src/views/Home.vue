<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/img/icon-above-font2.png">
    <HelloWorld msg="Ici apparaitra la page d'accueil"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
