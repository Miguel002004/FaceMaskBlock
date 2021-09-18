var mysql = require('mysql');

var dates = new Date(); 

module.exports = function(mask) {
    var maskBD = (mask == 'Con mascarilla') ? 1 : 0; 
    console.log('para BD: '+ maskBD);
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
            console.log("Conexión Exitosa"); 
        }
    }); 
    
    //funcion  insertar
    conexion.query(`INSERT INTO informacion (dia, mes, año, hora, cubrebocas) values ("${dates.getDate()}", 
    "${dates.getMonth()}", "${dates.getFullYear()}", "${dates.getHours()}:${dates.getMinutes()}", ${maskBD})`, function (error, results) {
        if (error)  throw error;
        else {
            console.log('Registro Agregado', results); 
        }
    }); 
    
    conexion.end();
}


//funcion  mostrar
/*
conexion.query('SELECT * FROM informacion', function (error, filas) {
    if (error) {
        throw error; 
    } else {
        filas.forEach(fila => {
            console.log(fila); 
        });
    }
}); 
*/
