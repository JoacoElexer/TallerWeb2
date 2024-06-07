const dotenv = require('dotenv');
dotenv.config(); // esto protege las contraseñas y datos sensibles
const mysql = require('mysql');
let connection;

try{ //se conecta a los datos de .env
    connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DBNAME
    });
}
catch(error){
    console.log(error);
}

module.exports = {connection}; //exporta la conexión a la base de datos
