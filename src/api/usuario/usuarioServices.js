const Usuario = require('./usuario')

Usuario.methods(['get', 'post', 'put', 'delete'])
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

module.exports = Usuario
