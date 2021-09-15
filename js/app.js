/*
var dates = new Date(); 
var fecha = `${dates.getDay()}-${dates.getMonth()}-${dates.getFullYear()}`;
var hora = `${dates.getHours()}:${dates.getMinutes()}`; 
*/

var dates = new Date(); 
var fecha = dates.get; 
var hora = `${dates.getHours()}:${dates.getMinutes()}`; 

//var fecha =  new Date().toISOString().slice(0, 19).replace('T', ' '); 
var mysql = require('mysql');
var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'facemaskblock', 
    user: 'root',
    password: ''
}); 

conexion.connect(function(error){
    if(error) {
        throw error; 
    } else {
        console.log("Conexion Exitosa"); 
    }
}); 

//funcion  mostrar
conexion.query('SELECT * FROM informacion', function (error, filas) {
    if (error) {
        throw error; 
    } else {
        filas.forEach(fila => {
            console.log(fila); 
        });
    }
}); 

//funcion  insertar
conexion.query(`INSERT INTO informacion (fecha, hora, cubrebocas) values ("${fecha}", "${hora}", 1)`, function (error, results) {
    if (error)  throw error;
    else {
        console.log('Registro Agregado', results); 
    }
}); 

conexion.end(); 
