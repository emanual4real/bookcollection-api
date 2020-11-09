import { Schema, model} from "mongoose";
import Book from './books';

const CollectionSchema = new Schema({
    user: String,
    user_id: String,
    collections: [Book]
})

const Collection = model('Collection', CollectionSchema)

export default Collection;