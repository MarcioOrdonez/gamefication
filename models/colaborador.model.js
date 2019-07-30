const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const perfilSchema = new Schema({
    description: String,
    perfilImage: String,
});

const colaboradorSchema = new Schema({
    name: String,
    email: String,
    password: String,
    isadmin: Boolean,
    info: perfilSchema
});

const Colaborador = mongoose.model('coladorador', colaboradorSchema);

module.exports = Colaborador;