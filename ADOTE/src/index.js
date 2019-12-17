//dependencias para intalar:
//npm i express bcryptjs body-parser mongoose jsonwebtoken
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configuraçãoes Servidor
const PORTA = 3000;
app.listen(PORTA);
console.info(`Rodando na porta ${PORTA}`);

//------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//------------------------------------------------
//rotas das api
require('./controllers/UserDoadorController')(app);
require('./controllers/ApiDoacaoController')(app);
require('./controllers/ApiAdotanteController')(app);