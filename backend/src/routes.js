const express = require('express');
//const crypto = require('crypto');
const ongController = require('./controllers/ongController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
//const connection = require('./database/connection');

const routes = express.Router();

//rota de listagem
routes.get('/ongs', ongController.index);

//rota de cadastro
routes.post('/ongs', ongController.create);

//rota para incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);

//rota para deletar incidents
routes.delete('/incidents/:id', IncidentController.delete);
// rota para profile incidents
routes.get('/profile', ProfileController.index);

//rota de login
routes.post('/sessions', SessionController.create);

module.exports = routes;