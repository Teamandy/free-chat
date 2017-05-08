const mongoose = require('mongoose')
const Chat = require('./Schema/Chat')

const CarolineMsg = mongoose.model('CarolineMsg', Chat)

module.exports = CarolineMsg