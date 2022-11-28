//SEED Route for books. This route when accessed will execute the function below and see our database.
const db = require('./')
    const seed_books =
    [
        {
            name: 'Do Androids Dream of Electric Sheep',
            author: 'Phillip K. Dick',
            description: 'The main plot follows Rick Deckard, a bounty hunter who is tasked with "retiring" (i.e. killing) six escaped Nexus-6 model androids.',
            img: 'https://m.media-amazon.com/images/I/31bNBTT29nL.jpg',
            genre: 'Science Fiction'
        }, {
            name: 'A Wild Sheep Chase',
            author: 'Haruki Murakami',
            description: 'Murakami tells the story of a 30-year-old Japanese man who tries to cope with an approaching midlife crisis and find answers to the questions that overwhelm him.',
            img: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390619896l/20629795.jpg',
            genre: 'Fantasy Fiction'
        }, {
            name: 'Black Sheep',
            author: 'Brant Menswar',
            description: 'In this powerful new book, author Brant Menswar shows you how to unleash your own black sheep--the five core values that make you who you are--to empower your life.',
            img: 'https://m.media-amazon.com/images/I/41lcFXEhzeL.jpg',
            genre: 'Nonfiction'
        }, {
            name: 'Russel the Sheep',
            author: 'Rob Scotton',
            description: 'All the sheep are falling asleep—except Russell. What\'s a sheep to do? Count stars… Count feet…',
            img: 'https://m.media-amazon.com/images/I/418UEVGczzL._AC_SY780_.jpg',
            genre: 'Children\'s Books'
        }
    ]
    
const seed_members = [
    {
        name: 'Shannon Jenkins',
        fav_book: 'The Bell Jar',
        fav_author: 'Emily Dickinson'
    }, {
        name: 'Josh Elm',
        fav_book: 'The Davinci Code',
        fav_author: 'Stephen King',
    }, {
        name: 'Pamela Jane',
        fav_book: 'The Kite Runner',
        fav_author: 'Gillian Flynn'
    }, {
        name: 'Katy Peters',
        fav_book: 'Without Reservations',
        fav_author: 'Alice Steinbach'
    }
]

db.Book.deleteMany({}, (err, books) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all books')

        db.Book.insertMany(seed_books, (err, books) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', books.length, "books")
            }
        })
    }
})

db.Member.deleteMany({}, (err, members) => {
    if (err) {
        console.log('Error occured in remove', err)
    } else {
        console.log('Removed all members')

        db.Member.insertMany(seed_members, (err, members) => {
            if (err) {
                console.log('Error occured in insertMany', err)
            } else {
                console.log('Created', members.length, "members")
            }
        })
    }
})