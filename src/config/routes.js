const express = require('express')

module.exports = (server) => {
  const router = express.Router()
  server.use('/api', router)

  // rotas Usuário
  const Usuario = require('../api/usuario/usuarioServices')
  Usuario.register(router, '/usuario')
}
