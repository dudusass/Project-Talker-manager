const express = require('express');
const bodyParser = require('body-parser');
const talker = require('./.trybe/middlewares/errTalker');
const login = require('./.trybe/middlewares/errLogin');
const createTalker = require('./.trybe/controllers/createTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.post('/talker', createTalker);
app.use(talker);
app.use(login);

app.listen(PORT, () => {
  console.log('Online');
});
