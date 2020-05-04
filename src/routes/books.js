import express from 'express';
import {fetchBooks, updateBook, addBook, deleteBook} from '../services/fetchBooks';
import logger from "../services/logger";

let router = express.Router();

// GET all books
router.get('/', async function(req, res, next) {
  logger.info('GET /books/')
  let books = await fetchBooks();
  res.send(books);
});

// GET book with query string
router.get('/search/', async function(req, res, next) {
  logger.info('GET /books/search/')
    let books = await fetchBooks(req.query);
    res.send(books);
  });

// Update a book
router.patch('/update/', async function(req, res, next) {
    logger.info('PATCH /books/update')
    let book = await updateBook(req.query)
    res.status(200).send(book)
  });

  // Create new book
router.post('/', async function(req, res, next) {
  logger.info('POST /books/')
  let book = await addBook(req.query)
  res.status(200).send(book)
});

// Delete one book
router.delete('/', async function(req, res, next) {
  logger.info('DELETE /books/')
  let _id = req.query._id
  let result = await deleteBook(_id);
  res.status(200).send(result)
});

module.exports = router;
