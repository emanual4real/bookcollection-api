import Book from "../models/books";

// get books
export const fetchBooks = (query) => {
    const books = Book.find(query);
    return books;
};

// updates all book properties
export const updateBook = async (updatedBook) => {
    let query = {_id: updatedBook._id}
    let book = await Book.findOne(query);
    let newBook = Object.assign(book, updatedBook);

    book.overwrite(newBook)
    await book.save();
    return book;
};

// create new book
export const addBook = async (newBook) => {
    let book = new Book(newBook);
    await book.save();
    return book;
};

// delete one book
export const deleteBook = async (_id) => {
    let result = await Book.deleteOne({_id});
    return result;
};