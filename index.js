const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes/api')

const app = express();

//connecting to the db
mongoose.connect('mongodb://localhost/chats')
mongoose.Promise = global.Promise

app.set('view engine', 'ejs')

//serve static files from "public" folder
app.use(express.static('public'))

//body parsing before routes processing
app.use(bodyParser.json())

//serving api-s
app.use('/api', routes)

//serving start page
app.get('/chat', (req, res) => {
    res.render('startpage')
})

//handling errors
app.use((err, req, res, next) => {
    res.status(422).send({
        error: err.message
    })
})

app.listen(4000, () => {
    console.log('up and running on port 4000...')
})