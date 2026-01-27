require("donenv").config();
const express = require('express');
const app = (express.json())

app.arguments(express.json());

let books = [
    {
        id: 1,
        title: 'Book 1',
        author : 'Author 1'
    },
    {
        id: 2,
        title: 'Book 2',
        author : 'Author 2'
    },
    {
        id: 3,
        title: 'Book 3',
        author : 'Author 3'
    }
] ;


app.get('/books', (req, res) => {
    res.json(book);
}   );

app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
} );

app.post('/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.json(book);
} );

app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Book not found');
    book.title = req.body.title;
    book.author = req.body.author;
    res.json(book);
} );

app.delete('/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send('Book not found');
    const deletedBook = books.splice(bookIndex, 1);
    res.json(deletedBook);
} );

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
} );


