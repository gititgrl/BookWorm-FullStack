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
    res.render('newBook', {
        tabTitle: 'New Book'
    })
})
//Create Route
router.post('/', (req, res) => {
    db.Book.create(req.body, (err, book) => {
        res.redirect('/dashboard')
    })     
})
//Update Route
router.put('/books/:id', (req, res) => {
    db.Book.findByIdAndUpdate(req.params.id, req.body, {new: true }, (err, book) => {
        res.redirect('/books/' + book._id)
    })
})
//Edit ejs route
router.get('/:id/edit', (req, res) => {
    db.Book.findById(req.params.id, (err, books) => {
        res.render('editBook', {
            book: books,
            tabTitle: "Edit"
        })
    })
})
//Delete Route
router.delete('/:id', (req, res) => {
    db.Book.findByIdAndRemove({ _id: req.params.id}, (err, book) => {
        res.redirect('/dashboard')
    })
})
//Show Route
router.get('/:id', (req, res) => {
    db.Book.findById(req.params.id, (err, books) => {
        res.render('showBook', {
            book: books,
            tabTitle: 'Books'
        })
    })
})
//export these routes so they are accessible in server.js
module.exports = router