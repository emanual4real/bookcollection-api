import mongoose from "mongoose";
import Book from "../models/books";
import Collection from '../models/collection';

// get collection
export const fetchCollection = (userId) => {
    const ownerObjId = new mongoose.Types.ObjectId(userId);
    const query = {"owner":ownerObjId}
    const collection = await Collection.findOne(query);
    return collection;
};

// add item to collection
// TODO - look for existing item in collection
export const addCollection = async (userId, newItemId) => {
    try {
        const book = await Book.findById(newItemId);
        const query = {"owner":userId}
        const collection = await Collection.findOneAndUpdate(query);

        collection.books.push(book);
        collection.save();
    } catch(err) {
        console.log('err', err)
    }
}

// create new collection
export const newCollection = async (userId) => {
    const ownerObjId = new mongoose.Types.ObjectId(userId)
    let collection = new Collection({owner: ownerObjId});
    await collection.save();
    return collection;
};

// delete one item from collection
export const deleteFromCollection = async (userId, itemId) => {
    const query = {"owner":userId}
    const collection = await Collection.findOneAndUpdate(query);
    collection.save()
    return result;
};