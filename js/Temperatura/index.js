var SerialPort = require('serialport');


var serialPort = new SerialPort("COM5", {
    baudRate: 9600,
    parser: new SerialPort.parsers.Readline("\n")
});

var clearData = "";
var readData = "";

serialPort.on('open',function(){
    console.log('open');
    serialPort.on('data', function(data){
        //console.log(data);
        readData += data.toString();
        console.log(readData);
    });
});