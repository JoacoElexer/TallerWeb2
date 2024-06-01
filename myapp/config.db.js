const dotenv = require('dotenv');
dotenv.config(); // esto protege las contraseñas y datos sensibles
const mysql = require('mysql');
let connection;

try{ //se conecta a los datos de .env
    connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
    });
}
catch(error){
    console.log(error);
}

module.exports = {connection}; //exporta la conexión a la base de datos
