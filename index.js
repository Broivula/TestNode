'use strict';
console.log('hello there');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req,res) => {
  console.log(req.query);
  const test = req.query.test;
  res.send('Hello World and some other stuff too, yo' + test);
  console.log('testing nodemon');
});

app.post('/', (req, res) => {
  res.send('Hello POST MALONE test!!');
  console.log(req.params);
});

app.listen(3000);
