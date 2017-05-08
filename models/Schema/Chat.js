const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Chat = new Schema({
    image: String,
    name: String,
    time: String,
    text: String
})

module.exports = Chat