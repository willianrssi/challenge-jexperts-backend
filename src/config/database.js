const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost/jexperts'

module.exports = mongoose.connect(url, { useMongoClient: true })

mongoose.Error.messages.general.required = 'O campo "{PATH}" é obrigatório'
