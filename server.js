//This is the entry point of my application
//All routes run this file
//+++++++++++++
//Dependencies
//+++++++++++++
const methodOverride = require('method-override')
const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const bodyparser = require('body-parser')


const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const flash = require('connect-flash')
const mongo = require('mongodb')
const { body, validationResult } = require('express-validator')
const MemoryStore = require('memorystore')(session)


//access models
const db = require('./models')

//access controllers
const booksCtrl = require('./controllers/books')
const membersCtrl = require('./controllers/members')
const usersCtrl = require('./controllers/users')

//background image


//+++++++++++++
//Middleware
//+++++++++++++
//set folder for static files
app.use(express.static('public'))
app.use(express.static('bootstrap'))
//sets the view engine to EJS for our app 
app.set('view engine', 'ejs')
//method-override allows us to interpret POST requests from the browser as another request type: DELETE, PUT, etc.
app.use(methodOverride('_method'))
//body parser: used for POST/PUT/PATCH routes: this will take incoming strings from the body that are url encoded and parse them into an object that can bea sccessed in the request paramater as a property called body
app.use(express.urlencoded({extended: true}))
//an example function that shows how middleware will run every time a route is accessed
app.use((req, res, next) => {
    console.log('I run for all routes');
    next()
});

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(cookieParser('random'));



//login route
app.use('/route', usersCtrl);



//+++++++++++++
//Routes
//+++++++++++++
// Index Route
app.get('/', (req, res) => {
    res.render('home')
})

//Dashboard route(GET/Read): This route affects both models
app.get('/dashboard', (req,res) => {
    db.Book.find({}, (err, books) => {
        db.Member.find({}, (err,members) => {
            res.render('dashboard', {
                books: books,
                members: members,
                tabTitle: 'My Bookworm'
            })
        })
    })
})
//All routes affecting the books model: tells our app to look at controllers/books.js file to handle all routes that begin with localhost:3000/books
app.use('/books', booksCtrl)
//All routes affecting the members model: tells our app to look at controllers/members.js file to handle all routes that begin with localhost:3000/members
app.use('/members', membersCtrl)

app.use('/users', usersCtrl)


//+++++++++++++
//Listener
//+++++++++++++
app.listen(port, () => {
    console.log('App is running on http://localhost:3000')
})