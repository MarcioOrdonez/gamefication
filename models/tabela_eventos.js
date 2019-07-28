const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const colaboradorSchema = require('colaborador').colaboradorSchema;


const eventoSchema = new Schema({
    tipo: String,
    score: Number,
    desc: String
});


const tabelaPontosSchema = new Schema({
    evento: [eventoSchema]
});

const tabelaSchema = new Schema({
    _id: String,
    colaborador: colaboradorSchema,
    created: colaboradorSchema,
    evento: tabelaPontosSchema
});

const Evento = mongoose.model('evento', tabelaSchema);

module.exports = Evento;