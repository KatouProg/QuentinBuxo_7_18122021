<template>
<div class="register">
    <div class="register-form">
        <h3>Inscription</h3>
        <p v-if="message != null"> {{ message }}</p>
        <p v-if="email.length >= 5 && password.length >= 5 && name.length >= 2">
            <ul>
                <li v-for="(error, ok) in errors" v-bind:key="ok">{{ errors[ok] }}</li>
            </ul>
        </p>
        <div class="form-group">
            <label>Pseudo</label>
            <input @keyup="checkForm" name="name" v-model="name" placeholder="Nom" />
        </div>

        <div class="form-group">
            <label>E-mail</label>
            <input @keyup="checkForm" name="mail" v-model="email" placeholder="E-mail" />
        </div>

        <div class="form-group">
            <label for="password">Mot de passe</label>
            <input @keyup="checkForm" type="password" label="password" v-model="password" placeholder="Mot de passe" minlength="7" maxlength="45" required/>
        </div>
        <!--<div>
          <label for="avatar">Choisissez une photo</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
        </div>-->

        <button class="btn btn-success btn-block" :disabled="inscription == false" @click="registerSubmit">Je m'inscris !</button>
        <a href="http://localhost:8081/#/" class="btn btn-dark btn-block"><i class="fas fa-arrow-left"></i> Retourner à l'accueil</a>
    </div>
</div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            errors: [],
            name: '',
            email: '',
            message: '',
            password: '',
            inscription: false
        }
    },
    methods: {
        checkForm:function(e) {
            this.errors = [];
            if (this.errors.length == 0) { this.inscription = true; console.log(this.inscription + "/" + this.errors.length)}
            if(!this.email) {
                this.errors.push("L'email est nécessaire !");
                this.inscription = false;
            } else if (!this.validEmail(this.email)) {
                this.errors.push("L'email est invalide !");
                this.inscription = false;
            }
            if(!this.name) {
                this.errors.push("Un nom est nécessaire !");
                this.inscription = false;
            } else if (!this.validName(this.name)) {
                this.errors.push("Nom invalide !")
                this.inscription = false;
            }
            if (!this.password) {
                this.errors.push("Le mot de passe est nécessaire");
                this.inscription = false;
            }
            if (!this.validPassword(this.password)) {
                this.errors.push("Le mot de passe doit contenir 8 caractères, une lettre, un chiffre.");
                this.inscription = false;
            }
            if(!this.errors.length) return true;
                e.preventDefault();
            },
            validEmail:function(email) {
                this.email = email;
                //eslint-disable-next-line
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validPassword:function(pass) {
                this.password = pass;
                //eslint-disable-next-line
                let rePass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                return rePass.test(pass);
            },
            validName:function(name) {
                this.name = name;
                //eslint-disable-next-line
                let reName = /^[a-z ,.'-]+$/i;
                return reName.test(name);
            },
        registerSubmit(){
            const data = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            fetch('http://localhost:3000/register', {
                method: "POST", body: JSON.stringify(data), headers: {"Content-type": "application/json; charset=UTF-8"}
            }).then(response => { 
                console.log(response);
                this.$router.push('/login');
            })
            .catch(err => this.message = err);
        }
    }
}
</script>

<style lang="scss">

.register-form {
  display:block;
  padding: 10px;
  width: 70%;
  margin-top: 8%;
  margin-left: auto;
  margin-right: auto;
  background-color: #fcd4d4;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  input,
  textarea {
    width: 80%;
    height: auto;
    overflow: hidden;
    font: 0.9em/1.5em "handwriting", sans-serif;
    padding: 5 10px;
    margin: 0;
    width: 240px;
    border-radius: 5px;
  }

  label {
      padding-right: 10px;
  }

  .btn-block {
    background-color: #fc2c04;
    border: #000000;
  }
}
</style>