const express = require('express');
const bodyParser = require('body-parser');
const talker = require('./.trybe/middlewares/errTalker');
const login = require('./.trybe/middlewares/errLogin');
const createTalker = require('./.trybe/controllers/createTalker');
const editTalker = require('./.trybe/controllers/editTalker');
const deleteTalker = require('./.trybe/controllers/deleteTalker');
const searchTalker = require('./.trybe/controllers/searchTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker/search', searchTalker);
app.use(login);
app.use(talker);
app.post('/talker', createTalker);
app.put('/talker/:id', editTalker);
app.delete('/talker/:id', deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
