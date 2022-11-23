// This controls all the routes for the book model
//dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()

//index route
router.get('/', (req, res) => {
    db.Book.find({}, (err, books) => {
        res.render('home', {
            tabTitle: "Book Worm",
            books: books
        })
    })
})