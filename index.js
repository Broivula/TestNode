'use strict';
console.log('hello there');
const express = require('express');
const multer = require('multer');
const app = express();
const upload = multer({dest: 'uploads/'});

app.use(express.urlencoded());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

app.get('/', (req,res) => {
  console.log(req.query);
  const test = req.query.test;
  res.send('Hello World and some other stuff too, yo' + test);
  console.log('testing nodemon');
});

app.post('/profile', upload.single('avatar'), (req, res, next) => {
 // res.send('testing upload test!!');
  res.send(req.query.avatar);
  console.log('regular ass test yo' + req.body);
});



app.post('/photos/upload', upload.array('photos', 12),  (req, res, next) => {
  res.send('JSON test');
  console.log(JSON.stringify(req.body, null, 2));
});

const cpUpload = upload.fields([{name: 'avatar', maxCount: 1}, {name: 'gallery', maxCount: 8}]);
app.post('/cool-profile', cpUpload, (req, res) => {
  console.log('uploadin.');
});

app.get('/test/:id/:kikkel', (req, res) => {
  console.log(req.params.id);
  res.send('test test' + req.params.id + req.params.kikkel);
  console.log('test kikkel ');
})

app.listen(3000);
