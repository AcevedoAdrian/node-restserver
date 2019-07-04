const mongoose = require('mongoose');

//obtenesmos el schema/cascaron para crear esquemas desde moongoose,
// de esta forma tenemos todas las propiedades 
let Schema = mongoose.Schema;


//declaramos un nuevo esquema.
let usuarioSchema = new Schema({
    //reglas y controles que ese usuario schema va a tener. 
    //Es decir los campos que van a tener la coleccion

    nombre: {
        //restricciones
        type: String,
        required: [true, 'El nombre es neceserio']
    },
    email: {
        type: String,
        required: [true, 'El email es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesario']


    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: 'USER_ROL'
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});


//Aca lo que hacemos es expotar el modelo asignandole el nombre de la BD 
// y le asignamos el esquema que creamos anteriormente
module.exports = mongoose.model('Usuario', usuarioSchema);