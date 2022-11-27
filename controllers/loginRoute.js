var express = require('express')
var router = express.Router()

const credential = {
    email: "newuser@gmail.com",
    password: "book123"
}

//Login Route
router.post('/login', (req, res) => {
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email;
        // res.redirect('/dashboard');
        res.send("Login Successful")
    }else {
        res.send("Invalid Login")
    }
})

module.exports = router