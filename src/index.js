import dotenv from 'dotenv'
import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import bookRouter from "./routes/books";
import userRouter from "./routes/users";

const app = express();
dotenv.config()
// middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


const MONGO_STRING = process.env.MONGOCONNECT;
mongoose.connect(MONGO_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

// book routes
app.use('/books/', bookRouter);
app.use('/users/', userRouter);

app.get('/', (req, res, next) => {
    res.send('hello world');
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`))