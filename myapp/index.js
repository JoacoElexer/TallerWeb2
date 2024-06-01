const express = require('express');
const app = express()
const port = 3000
var cors = require('cors');

app.use(cors);
app.use(express.json()); //permite recibir y enviar datos en formato json
app.use(express.urlencoded({extended: true})) //codifica por si se usan caracteres especiales

app.use(require('./routes/productos')); //importa las rutas de productos


/*
app.get('/', (req, res) => {
    res.send('Día de la hamburguesa 2x1 en Carls Jr.')
})

app.get('/productos', (req, res) => {

    let productos = [
        {
            nombre: 'Hamburguesa',
            precio: 150
        },
        {
            nombre: 'Refresco',
            precio: 200
        },
        {
            nombre: 'Papas Fritas',
            precio: 50
        }
    ]

    let respuesta = '<table border="1">';
    productos.forEach(producto => {
        respuesta += `<tr><td>${producto.nombre}</td>
        <td>${producto.precio}</td></tr>`;
    });

    respuesta += '</table>';

    res.send(respuesta)
})
*/
app.listen(port, () => {
    console.log("Example app on listening port "+ port);
}) 