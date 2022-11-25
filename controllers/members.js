// This controls all the routes for the book model
//dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()

//Test Route
router.get('/', (req, res) => {
        res.render('home')
})

module.exports = router