// This controls all the routes for the book model
//dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()

//Dashboard Route
router.get('/dashboard', (req, res) => {
        db.Member.find({}, (err, members) => {
                res.send(members)
        })
})
//New Route
router.get('/newmember', (req, res) => {
    console.log('newmember');
    res.send('Test')
})

//Create Rpute
router.post('/', (req, res) => {
    db.Member.create(req.body, (err, member) => {
        res.send(member)
    })     
})
//Show Route
router.get('/:id', (req, res) => {
    db.Member.findById(req.params.id, (err,members) => {
        res.send(members)
    })
})


//export these routes so they are accessible in server.js
module.exports = router