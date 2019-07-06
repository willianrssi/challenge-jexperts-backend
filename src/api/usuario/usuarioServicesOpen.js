const Usuario = require('./usuario')
const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/

const sendErrorsFromDB = (res, dbErrors) => {
  console.log(dbErrors)
  const errors = []
  _.forIn(dbErrors.errors, error => errors.push(error.message))
  return res.status(400).json({ errors })
}

const logar = (req, res, next) => {
  const login = req.body.login || ''
  const senha = req.body.senha || ''

  Usuario.findOne({ login }, (err, usuario) => {
    if (err) {
      return sendErrorsFromDB(res, err)
    } else if (usuario && bcrypt.compareSync(senha, usuario.senha)) {
      const token = jwt.sign(usuario, env.authSecret, {
        expiresIn: '1 day'
      })
      const { login } = usuario
      res.json({ login, token })
    } else {
      return res.status(400).send({ errors: ['Usuário/Senha inválidos'] })
    }
  })
}

const validaToken = (req, res, next) => {
  const token = req.body.token || ''
  jwt.verify(token, env.authSecret, function (err, decoded) {
    return res.status(200).send({ valid: !err })
  })
}

const signup = (req, res, next) => {
  const nome = req.body.nome || ''
  const telefone = req.body.telefone || ''
  const email = req.body.email || ''
  const login = req.body.login || ''
  const senha = req.body.senha || ''

  if (!email.match(emailRegex)) {
    return res.status(400).send({ errors: ['O e-mail informado é inválido'] })
  }

  const salt = bcrypt.genSaltSync()
  const senhaCript = bcrypt.hashSync(senha, salt)

  Usuario.findOne({ login }, (err, usuario) => {
    if (err) {
      return sendErrorsFromDB(res, err)
    } else if (usuario) {
      return res.status(400).send({ errors: ['Usuário já cadastrado.'] })
    } else {
      const novoUsuario = new Usuario({ nome, telefone, email, login, senha: senhaCript })
      novoUsuario.save(err => {
        if (err) {
          return sendErrorsFromDB(res, err)
        } else {
          logar(req, res, next)
        }
      })
    }
  })
}

module.exports = { logar, signup, validaToken }
