'use strict';
console.log('hello there');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('here we come?');
  res.send('Hello World and some other stuff too, yo');
  console.log('testing nodemon');
});

app.post('/', (req, res) => {
  res.send('Hello POST test!!');
  console.log('POST gets called');
});

app.listen(3000);
