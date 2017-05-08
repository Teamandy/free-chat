const mongoose = require('mongoose')
const Chat = require('./Schema/Chat')

const NickMsg = mongoose.model('NickMsg', Chat)

module.exports = NickMsg