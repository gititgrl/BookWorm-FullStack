// This controls all the routes for the book model
//dependencies
const db = require("../models")
const express = require('express')
const router = express.Router()

//Dashboard Route
router.get('/dashboard', (req, res) => {
        db.Member.find({}, (err, members) => {
            res.render('dashboard', {
                tabTitle: 'My Bookworm',
                member: members
        })
    })
})
//New Route
router.get('/newmember', (req, res) => {
    console.log('newmember');
    res.render('newMember', {
        tabTitle: "New Member"
    })
})

//Create Rpute
router.post('/', (req, res) => {
    db.Member.create(req.body, (err, member) => {
        res.send(member)
    })     
})
//Update Route
router.put('/members/:id', (req, res) => {
    db.Member.findByIdAndUpdate(req.params.id, req.body, {new: true }, (err, member) => {
        res.send(member)
    })
})
//Delete Route
router.delete('/members/:id', (req, res) => {
    db.Member.findByIdAndDelete(req.params.id, (err, member) => {
        res.redirect('/dashboard')
    })
})
//Show Route
router.get('/:id', (req, res) => {
    db.Member.findById(req.params.id, (err,members) => {
        res.render('showMember', {
            member: members,
            tabTitle: members.name
        })
    })
})


//export these routes so they are accessible in server.js
module.exports = router