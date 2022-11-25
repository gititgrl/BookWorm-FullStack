//This is the entry point of my application
//All routes run this file
//+++++++++++++
//Dependencies
//+++++++++++++
const methodOverride = require('method-override')
const express = require('express')
const app = express()
const port = 3000

//access models
const db = require('./models')

//access controllers
const booksCtrl = require('./controllers/books')
const membersCtrl = require('./controllers/members')



//+++++++++++++
//Middleware
//+++++++++++++
//set folder for static files
app.use(express.static('public'))
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

//+++++++++++++
//Routes
//+++++++++++++
// Index Route (GET/Read): We'll leave this route in the server.js since it affects both models
app.get('/', (req, res) => {
    // query locations from the database
    db.Book.find({}, (err, books) => {
        // query log entries from the database
        db.Member.find({}, (err, members) => {
            // render `index.ejs` after data has been queried
            res.render('home', {
                books: books,
                members: members,
                tabTitle: 'Bookworm'
            })
        })
    })
})
//All routes affecting the books model: tells our app to look at controllers/books.js file to handle all routes that begin with localhost:3000/books
app.use('/books', booksCtrl)
//All routes affecting the members model: tells our app to look at controllers/members.js file to handle all routes that begin with localhost:3000/members
app.use('/members', membersCtrl)


//+++++++++++++
//Listener
//+++++++++++++
app.listen(port, () => {
    console.log('App is running')
})