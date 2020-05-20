const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
/*
app.use(cors({
    origin: 'http://meuapp.com'
}));
*/
app.use(express.json());
app.use(routes);

app.listen(3333);

/*recursos
    rotas / recursos
*/

/*
    metodos http:
    GET: buscar uma informação do back-end;
    POST:criar uma informação no back-end;
    PUT: alterar uma informação no back-end;
    DELETE: deletar uma informação no back-end;
*/

/*
    tipos de parametros:
    query params: parametros nomeados enviados na rota apos "?" (filtros, paginacao)
    route -params: parametros para identificar recursos
    Request Body: corpo da requisição, utilizando para criar ou alterar recursos
*/

/*
    SQL: Mysql,Sqlite,PostgreSql, Oracle...
    NoSql: mongoDB, CouchDB, etc

    -Pode instalar o Driver
    ou - Query Builder: table('users).select('*').where()
*/




