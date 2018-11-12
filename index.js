'use strict';
console.log('hello there');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded());
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
  console.log(req.query);
  const test = req.query.test;
  res.send('Hello World and some other stuff too, yo' + test);
  console.log('testing nodemon');
});

app.post('/', (req, res) => {
  res.send('Hello POST MALONE test!!');
  console.log('regular ass test yo');
});



app.post('/json', (req, res) => {
  res.send('JSON test');
  console.log(JSON.stringify(req.body, null, 2));
});


app.get('/test/:id/:kikkel', (req, res) => {
  console.log(req.params.id);
  res.send('test test' + req.params.id + req.params.kikkel);
  console.log('test kikkel ');
})

app.listen(3000);
