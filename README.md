# Bookworm
Bookworm is an app that allows readers of all kinds to add their friends and favorite books to a collection.

<img width="1440" alt="homepage" src="/public/assets/HomePage.png"
## Description

This is a full CRUD app. Below is a table of the required routes.
- Table of Required Routes

    |       **URL**      | **HTTP Verb** | **REST Action** | **CRUD Action** |   **EJS View**   |
    | ------------------ | ------------- | --------------- | --------------- | ---------------- |
    | /                  | GET           | index           | read            | home.ejs         |
    | /books/:id         | GET           | show            | read            | showBook.ejs     |
    | /members/:id       | GET           | show            | read            | showMember.ejs   |
    | /books/new         | GET           | new             | read            | newBook.ejs      |
    | /members/new       | GET           | new             | read            | newMember.ejs    |
    | /books/            | POST          | create          | create          |                  |
    | /members/          | POST          | create          | create          |                  |
    | /books/:id/edit    | GET           | edit            | read            | editBook.ejs     |
    | /members/:id/edit  | GET           | edit            | read            | editMember.ejs   |
    | /books/:id         | PATCH/PUT     | update          | update          |                  |
    | /members/:id       | PATCH/PUT     | update          | update          |                  |
    | /books/:id         | DELETE        | destroy         | delete          |                  |
    | /members/:id       | DELETE        | destroy         | delete          |                  |


### User Stories
As a avid reader, I would like to see what my friends are reading and add their book choices to my own book club.
As a teacher, I would like to share my favorite books with other teachers that they can use in the classroom.

### Technologies Used
 Javascript 
 EJS 
 CSS 
 Node.js 
 MongoDB 
 Express
 Mongoose

