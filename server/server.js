const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
}); 

// get /users
// give users a name and age

app.get('/users', (req, res) => {
  res.status(202).send([{
    name: 'Mateusz',
    age: 23
  }, {
    name: 'Foka',
    age: 23
  }, {
    name: 'Bilbo',
    age: 1
  }]);
});

app.listen(3000);

module.exports.app = app;