<template>
    <div class="login-form">
        <h3>Connexion</h3>
        <p v-if="dataLog.email.length >= 5 && dataLog.password.length >= 5">
            <ul>
                <li v-for="(error, ok) in errors" v-bind:key="ok">{{ errors[ok] }}</li>
            </ul>
        </p>
        <div class="form-group">
            <label>Adresse mail</label>
            <input @keyup="checkForm" name="mail" v-model="email" placeholder="E-mail" />
        </div>

        <div class="form-group">
            <label for="password">Mot de passe</label>
          <input @keyup="checkForm" type="password" name="password" v-model="password" placeholder="Mot de passe" minlength="7" required/>
        </div>

        <p class="error-msg" v-if="otherData.msg">{{ otherData.message }}</p>
        <button class="btn btn-success btn-block" :disabled="canLogin == false" @click="loginSubmit">Je me connecte !</button>
        <a href="http://localhost:8081/" class="btn btn-dark btn-block"><i class="fas fa-arrow-left"></i>Retourner à l'accueil</a>
    </div>
</template>


<script>
    import axios from "axios"

    export default {
        name: 'login',
        data() {
            return {
                errors: [],
                canLogin: false,
                dataLog: {
                    email : '',
                    password: ''
                },

                otherData: {
                    msg: false,
                    message: ""
                },
                dataSend: ""
            }
        },
        methods: {
            checkForm:function(e) {
                this.errors = [];
                if (this.errors.length == 0) { this.canLogin = true; console.log(this.canLogin + "/" + this.errors.length)}
                if(!this.dataLog.email) {
                    this.errors.push("L'email est nécessaire !");
                    this.canLogin = false;
                } else if (!this.validEmail(this.dataLog.email)) {
                    this.errors.push("L'email est invalide !");
                    this.canLogin = false;
                }
                if (!this.dataLog.password) {
                    this.errors.push("Le mot de passe est nécessaire");
                    this.canLogin = false;
                }
                if (!this.validPassword(this.dataLog.password)) {
                    this.errors.push("Le mot de passe doit contenir 8 caractères, une lettre, un chiffre.");
                    this.canLogin = false;
                }
                if(!this.errors.length) return true;
                e.preventDefault();
            },
            validEmail:function(email) {
                this.dataLog.email = email;
                //eslint-disable-next-line
                let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validPassword:function(pass) {
                this.dataLog.password = pass;
                //eslint-disable-next-line
                let rePass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                return rePass.test(pass);
            },
            loginSubmit(){
                this.dataSend = JSON.stringify(this.dataLog);
                axios.post('http://localhost:3000/login', this.dataSend, {headers: {'Content-Type': 'application/json'}})
                .then(response => {
                    let dataSend =  JSON.parse(response.data);
                    localStorage.userId = dataSend.userId;
                    localStorage.token = dataSend.token;
                    localStorage.email = dataSend.email;
                    this.$router.push('/groupomania');
                    location.reload();
                })
                .catch(err => {
                    let msgerr = "Mot de passe ou email incorrect ! ";
                    console.log(err);
                    this.otherData.message = msgerr;
                    this.otherData.msg = true;
                });
            }
        }
    }
</script>

<style lang="scss">

.login-form {
  align-items: center;
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
    align-items: center;
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
