import express from "express";
import bodyParser from 'body-parser';
import bookRouter from "./routes/books";
import userRouter from "./routes/users";

const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// book routes
app.use('/books/', bookRouter);
app.use('/users/', userRouter);

app.get('/', (req, res, next) => {
    res.send('hello world');
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`))