const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/jexperts')

mongoose.Error.messages.general.required = 'O campo "{PATH}" é obrigatório'
