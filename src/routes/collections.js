import express from 'express';
import {fetchBooks, updateBook, addBook, deleteBook} from '../services/books';
import logger from "../services/logger";

let router = express.Router();

// GET all books
router.get('/', async (req, res, next) => {
  logger.info('GET /books/')
  try {
    let books = await fetchBooks();
    res.status(200).send(books);
    // res.status(200).send(books.slice(0,10));
  } catch(err) {
    logger.error('GET /books/', err)
    res.status(500).send(err);
  }
  next()
});

// GET book with query string
router.get('/search/', async (req, res, next) => {
  logger.info('GET /books/search/')
  try {
    let books = await fetchBooks(req.query);
    res.status(200).send(books);
  } catch(err) {
    logger.error('GET /books/search', err)
    res.status(500).send(err);
  }
  next()
  });

// Update a book
router.patch('/update/', async (req, res, next) => {
    logger.info('PATCH /books/update')
    try {
      let book = await updateBook(req.query)
      res.status(200).send(book)
    } catch(err) {
      logger.error('PATCH /books/update', err)
      res.status(500).send(err);
    }
    next()
  });

  // Create new book
router.post('/', async (req, res, next) => {
  logger.info('POST /books/')
  try {
    const { body } = req;
    let book = await addBook(body)
    res.status(200).send(book)
  } catch(err) {
    logger.error('POST /books/', err)
    res.status(500).send(err);
  }
  next()
});

// Delete one book
router.delete('/', async function(req, res, next) {
  logger.info('DELETE /books/')
  try {
    const {body} = req;
    const {_id} = body;
    let result = await deleteBook(_id);
    res.status(200).send(result)
  } catch(err) {
    logger.error('DELETE /books/', err)
    res.status(500).send(err);
  }
  next()
});

module.exports = router;
