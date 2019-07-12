const mongoose = require('mongoose');
//plugin de mongoose para validadr lo unique
const uniqueValidator = require('mongoose-unique-validator');

//obtenesmos el schema/cascaron para crear esquemas desde moongoose,
// de esta forma tenemos todas las propiedades 
let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROL', 'USER_ROL'],
    message: '{VALUE} no es un rol valido'
}

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
        unique: true,
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
        default: 'USER_ROL',
        enum: rolesValidos
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
/**
 * El metodo to tojson siempre se llama cuando vamos imprimir
 * Modificamos el metodo vamos a quitar el campo pass para no mostrarlo
 * cuando llamamos el metodo toJSON
 */
usuarioSchema.methods.toJSON = function() {

    //Todo lo que tenga el objeto en ese mometo se lo paso a user
    let user = this;
    //tomo el objeto de user
    let userObject = user.toObject();
    //elimino el campo password
    delete userObject.password;

    return userObject;
}



/**
 * Debemos decir al schema que utilice el plugin de validatorUni
 * el pugling es el primer parametro el segundo estamos editando el 
 * mensaje de error
 */

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico ' });


//Aca lo que hacemos es expotar el modelo asignandole el nombre de la BD 
// y le asignamos el esquema que creamos anteriormente
module.exports = mongoose.model('Usuario', usuarioSchema);