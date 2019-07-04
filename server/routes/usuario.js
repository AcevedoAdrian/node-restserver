const express = require('express');
const Usuario = require('../models/usuario')
const app = express();



app.get('/usuario', function(req, res) {
    //con esta hago la respuesta http
    //res.send('Hello World')

    //con esto hago la respuesta json
    res.json('get usuario dev')



})


//El post es para crear/crear  nuevos registros
app.post('/usuario', function(req, res) {

    //con esto hago la respuesta json

    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: body.password,
        role: body.role
    });

    usuario.save((err, usuarioDB) => {

        if (err) {
            return res.status(400).json({})
        }
    });


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

module.exports = app;