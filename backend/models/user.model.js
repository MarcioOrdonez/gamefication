const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const perfilSchema = new Schema({
    description: String,
    perfilImage: String,
});

const colaboradorSchema = new Schema({
    name: {
        type: String,
        lowercase: true,
        required: true
    },
    email: {
       type: String,
       lowercase: true,
       index: true,
       unique: true,
       required: true
    },
    password:{
        type: String,
        required: true
    },
    isadmin: {
        type: Boolean,
        default: false
    },
    info: perfilSchema
});

const Colaborador = mongoose.model('user', colaboradorSchema);

module.exports = Colaborador;