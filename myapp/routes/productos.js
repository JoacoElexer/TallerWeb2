const express = require('express'); //importa express
const app = express(); //crea una instancia de express
const dotenv = require('dotenv'); //importa dotenv
dotenv.config(); // esto protege las contraseñas y datos sensibles

const{connection} = require('../config.db'); //importa la conexión a la base de datos
const getProductos = (request, response) => { //función que obtiene los productos
    connection.query('SELECT * FROM tb_productos',
    (error, results) => {
        if(error){
            throw error;
        }
        response.status(200).json(results);
    });
}

app.route('/productos').get(getProductos); //ruta que obtiene los productos

module.exports = app; //exporta la aplicación