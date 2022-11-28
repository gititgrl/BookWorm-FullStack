// This controls all the routes for the book model
//dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()

//Test Route
router.get('/dashboard', (req, res) => {
    db.Book.find({}, (err, books) => {
        res.render('dashboard', {
            tabTitle: 'My Bookworm',
            books:books
        })
    })    
})

//New Route
router.get('/newbook', (req, res) => {
    console.log('newbook');
    res.send('Test')
})
//Create Rpute
router.post('/', (req, res) => {
    db.Book.create(req.body, (err, book) => {
        res.send(book)
    })     
})
//Show Route
router.get('/:id', (req, res) => {
    db.Book.findById(req.params.id, (err,books) => {
        res.send(books)
    })
})
//export these routes so they are accessible in server.js
module.exports = router