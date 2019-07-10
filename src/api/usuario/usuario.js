const restful = require('node-restful')
const mongoose = restful.mongoose

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String },
  email: { type: String, required: true },
  login: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
})

module.exports = restful.model('Usuario', usuarioSchema)
