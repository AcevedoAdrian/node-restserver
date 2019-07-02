require('./config/config');
const express = require('express')
const app = express()
    //procesa  y serializa en un objeto json qeu nos mandan por post
const bodyParser = require('body-parser')



app.get('/usuario', function(req, res) {
    //con esta hago la respuesta http
    //res.send('Hello World')

    //con esto hago la respuesta json
    res.json('get usuario')



})


// parse application/x-www-form-urlencoded
// procesar peticiones x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
// parcea las respuestas
app.use(bodyParser.json())

//El post es para crear/crear  nuevos registros
app.post('/usuario', function(req, res) {

    //con esto hago la respuesta json

    let body = req.body;

    if (body.nombre === undefined) {

        //Mando el mensaje de badrequest, con el codigo de error correspondiente mas un json 
        res.status(400).json({
            ok: false,
            mensaje: "Se necesita el nombre"

        })
    } else {
        res.json({
            persona: body
        });
    }


})

// EL put es para actualizar datos de los registros
//con los : indico que es el paramentro que estoy esperando.
app.put('/usuario/:id', function(req, res) {

    //para obtener el paramentro lo hago con req(que es lo que me estana mandado ).params.variable que me mandan 
    let id = req.params.id;

    //con esto hago la respuesta json
    res.json({ id })
})

//Es para eliminar registros, pero en realidad lo que hacemos es modificara
//un campo de la base de datos para indicar que se encuentra en estado de desbilitado
app.delete('/usuario', function(req, res) {

    //con esto hago la respuesta json
    res.json('delete usuario')
})


app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto 3000');

})