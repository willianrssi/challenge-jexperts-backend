const express = require('express')
const auth = require('./auth')

module.exports = (server) => {
  // rotas Usuário protegidas
  const protectedApi = express.Router()
  server.use('/api', protectedApi)

  protectedApi.use(auth)

  const UsuarioProtected = require('../api/usuario/usuarioServicesProtected')
  UsuarioProtected.register(protectedApi, '/usuario')

  // rotas Usuário Abertas

  const openApi = express.Router()
  server.use('/oapi', openApi)

  const UsuarioAuth = require('../api/usuario/usuarioServicesOpen')
  openApi.post('/login', UsuarioAuth.logar)
  openApi.post('/signup', UsuarioAuth.signup)
  openApi.post('/validaToken', UsuarioAuth.validaToken)
}
