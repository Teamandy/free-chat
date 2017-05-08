const express = require('express')
const router = express.Router()

//our MongoDB models
const CarolineMsg = require('../models/CarolineMsg')
const NickMsg = require('../models/NickMsg')

//getting all msg from DB for each chat
router.get('/get/:name', (req, res) => {
    switch (req.params.name) {
        case 'nick':
            NickMsg.find().then((messages) => {
                res.send(messages)
                // res.render('chatview', {
                //     payload: messages,
                //     name: req.params.name
                // })
            })
            break
        case 'caroline':
            CarolineMsg.find().then((messages) => {
                res.send(messages)
                // res.render('chatview', {
                //     payload: messages,
                //     name: req.params.name
                // })
            })
            break
    }
})

//sending messages to DB
router.post('/post/:name', (req, res, next) => {
    switch (req.params.name) {
        case 'nick':
            NickMsg.create(req.body).then((message) => {
                res.send(message)
            }).catch(next)
            break
        case 'caroline':
            CarolineMsg.create(req.body).then((message) => {
                res.send(message)
            }).catch(next)
            break
    }
})

module.exports = router