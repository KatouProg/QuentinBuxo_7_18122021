// Install d'express --> deploiement de l'API
const express = require("express");

const bodyParser = require("body-parser"); // extrait le corp d' une requete et l' expose dans req.body
const helmet = require("helmet"); // securise express en configurant divers headers

const userRoutes = require('./routes/users');

const app = express();

app.use (helmet()); // Sécuriser les requêtes http

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.post('/register', userRoutes); // Inscription
app.post('/login', userRoutes); // Connexion

app.use((req, res, next) => {
    console.log('Requête en cours...');
    next();
});

module.exports = app;