var express = require('express');
var http = require('http');

var app = express();

const io = require('socket.io')(80);


app.get("/",function(req,res) {
    res.send('<h1>hola</h1>');
  });

app.use(express.static('public'));
//========================================================================================
io.on('connection', function (socket) {
  console.log("Connected succesfully to the socket ...");

  var news = [
      { title: 'The cure of the Sadness is to play Videogames',date:'04.10.2016'},
      { title: 'Batman saves Racoon City, the Joker is infected once again',date:'05.10.2016'},
      { title: "Deadpool doesn't want to do a third part of the franchise",date:'05.10.2016'},
      { title: 'Quicksilver demand Warner Bros. due to plagiarism with Speedy Gonzales',date:'04.10.2016'},
  ];

  // Enviar noticias al socket
  socket.emit('news', news);

  socket.on('my other event', function (data) {
      console.log(data);
  });
});
//==================================================================================================
app.listen(8080);