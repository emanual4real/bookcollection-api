import { Schema, model} from "mongoose";

const BookSchema = new Schema({
    Realm: String,
    Series: String,
    Title: String,
    Author: String,
    Editor: String,
    Release: Date,
    ISBN: String
})

const Book = model('Book', BookSchema)

export default Book;