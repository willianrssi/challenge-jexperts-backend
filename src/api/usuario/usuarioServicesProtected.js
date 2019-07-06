const Usuario = require('./usuario')
const bcrypt = require('bcrypt')

Usuario.methods(['get', 'put', 'delete'])
Usuario.updateOptions({ new: true, runValidators: true })

Usuario.route('count', (req, res, next) => {
  Usuario.count((error, value) => {
    if (error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value })
    }
  })
})

Usuario.before('put', hashPassword)

function hashPassword (req, res, next) {
  const salt = bcrypt.genSaltSync()
  if (req.body.senha) {
    req.body.senha = bcrypt.hashSync(req.body.senha, salt)
  }
  next()
}

module.exports = Usuario
