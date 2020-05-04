import mongoose from "mongoose";
import Book from "../models/books";

require('dotenv').config();

const MONGO_STRING = process.env.MONGOCONNECT;

// get books
export const fetchBooks = (query) => {
    mongoose.connect(MONGO_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
    const books = Book.find(query);
    return books;
};

// updates all book properties
export const updateBook = async (updatedBook) => {
    mongoose.connect(MONGO_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
    let query = {_id: updatedBook._id}
    let book = await Book.findOne(query);
    let newBook = Object.assign(book, updatedBook);

    book.overwrite(newBook)
    await book.save();
    return book;
};

// create new book
export const addBook = async (newBook) => {
    mongoose.connect(MONGO_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
    let book = new Book(newBook);
    await book.save();
    return book;
};

// delete one book
export const deleteBook = async (_id) => {
    mongoose.connect(MONGO_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
    let result = await Book.deleteOne({_id});
    return result;
};