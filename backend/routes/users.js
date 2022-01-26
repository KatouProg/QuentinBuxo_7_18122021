const router = require('express').Router(); // Express module router
const userCtrl = require('../controllers/users'); // Chemin pour les fonctions userCtrl
//const auth = require('../middleware/auth'); // Chemin pour vérifier l'auth

try {
   router.post("/register", userCtrl.signup); // Route création d'un compte
   router.post("/login", userCtrl.login); // Route connexion
   
} catch (err) {
    console.log("Erreur de route > Login/SignUp/ModifyUser/GetProfil/DeleteProfil");
}

module.exports = router;