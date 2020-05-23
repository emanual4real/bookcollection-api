import mongoose from "mongoose";
import User from "../models/users";

require('dotenv').config();

const MONGO_STRING = process.env.MONGOCONNECT;

// register new user
export const register = async (newUser) => {
    mongoose.connect(MONGO_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
    let user = new User(newUser);
    await user.save();
    return user;
};

// delete registration
export const deleteUser = async (_id) => {
    mongoose.connect(MONGO_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
    let result = await User.deleteOne({_id});
    return result;
};