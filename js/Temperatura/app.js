var express = require('express');
var app = express();

app.get("/",function(req,res) {
    res.send('<h1>hola</h1>');
  });

  app.use(express.static('public'));
app.listen(8080);