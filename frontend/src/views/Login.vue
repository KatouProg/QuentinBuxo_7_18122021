<template>
  <div class="Login">
    <form @submit.prevent="login">
      <div>
        <label for="username">Nom</label>
        <input name="username" v-model="username" placeholder="Nom" />
      </div>
      <div>
        <label for="mail">E-mail</label>
        <input name="mail" v-model="mail" placeholder="E-mail" />
      </div>
      <div>
        <label for="password">Mot de passe</label>
        <input
          name="password"
          v-model="password"
          placeholder="Mot de passe"
          type="password"
        />
      </div>
      <div>
        <label for="avatar">Choisissez une photo de profil</label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </div>
      <input type="submit" value="Envoyer" />
    </form>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "",
      mail: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const { username, mail, password } = this;
      const res = await fetch(
        "https://SomberHandsomePhysics--five-nine.repl.co/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            mail,
            password,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
    },
  },
};
</script>
