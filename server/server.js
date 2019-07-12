require('./config/config');

const express = require('express');
//Para las conexiones a la base de datos de mongo
const mongoose = require('mongoose');
//procesa  y serializa en un objeto json qeu nos mandan por post
const bodyParser = require('body-parser')

//-----------------------------------------------------------------------------------
const app = express();



// parse application/x-www-form-urlencoded
// procesar peticiones x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// parcea las respuestas
app.use(bodyParser.json())

// importamos y usamos las rutas de los usuarios
app.use(require('./routes/usuario'));

//conexion a la base de datos, por mas que no exista la bd, igual verifica la conexion
//si existe un error lo muestra caso contrario muestra el log. protocolo/urlBD:puerto/NombreBD
mongoose.connect('mongodb://localhost:27017/cafe', {
    useCreateIndex: true,
    useNewUrlParser: true
}, (err, res) => {

    if (err) throw err;

    console.log('Conexion exitosa a la BDMONGO');

});


app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto 3000');

})