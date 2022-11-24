const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let usuarioShema = new Schema(
    {
        nombre: {
            type: String,
        },
        apellido: {
            type: String,
        },
        email: {
            type: String,
        },
        plan: {
            type: String,
        },
        fecha: {
            type: String,
        },
        estado: {
            type: String,
        },
    },
    {
        collection: "usuarios",
    }
);

module.exports = mongoose.model("Usuario", usuarioShema);