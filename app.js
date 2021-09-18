var express = require('express');
var http = require('http');
var sqlConnetcion = require('./sqlConnetion');

var SerialPort = require('serialport');

const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM5');

var app = express();

const io = require('socket.io')(80);


app.get("/",function(req,res) {
    res.send('<h1>hola</h1>');
  });

app.use(express.static('public'));
//========================================================================================

const parser = port.pipe(new Readline({ delimiter: '\r\n' }));

var messageSocket


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
  //borrar
  socket.on('my other event', function (data) {
      messageSocket = data;
      //console.log(data);
  });
});

parser.on('data', function(data){
  newData = parseFloat(data);
  console.log(newData);
  newData < 10 ? sqlConnetcion(messageSocket) : console.log('muy lejos puños');
});
//==================================================================================================
app.listen(8080);