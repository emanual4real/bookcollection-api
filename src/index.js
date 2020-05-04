import express from "express";
import bookRouter from "./routes/books";

const app = express();

// book routes
app.use('/books/', bookRouter);

app.get('/', (req, res, next) => {
    res.send('hello world');
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))