var SerialPort = require('serialport');

const Readline = require('@serialport/parser-readline')
const port = new SerialPort('COM5')

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
var newData = 0.0
parser.on('data', function(data){
    newData = parseFloat(data);
    console.log(newData);
    newData < 10 ? console.log('muy cerca puños') : console.log('muy lejos puños');
});