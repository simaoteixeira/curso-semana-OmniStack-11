const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Apagar uma informação no back-end
 */

 /**
  * Tipos de Parâmetros:
  * 
  * Query Params: parametros enviados na rota após o "?"
  * Route Params: Parametros para identificar recursos
  * Request Body: Corpo da requisição, utilizadopara criar ou alterar recursos
  */
app.use(routes);
app.use(errors());

//app.listen(3333); Antes dos testes e antes de mudar o nome para app
module.exports = app;