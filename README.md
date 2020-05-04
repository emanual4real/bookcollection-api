# bookCollection-api

## This is the backend of my book collection webapp.
* Database - Mongo on a linux box with Docker
* Backend - Node with express (Dockerize it in the future)
* Frontend - Node, React, Redux (later Dockerize with NGINX)

*NOTE: Technically, I'm a professional programmer because I'm paid at work to write code but I'm still learning.  I'll welcome any feedback/comments/questions*

## TODO List
* Login endpoints
* Authentication
* Collection endpoints
* Error handling

## API Endpoints (later maybe I'll learn swagger)

### /books

* **GET /books** - get all books
* **GET /books/search/?** - get all books with query parameters
* **PATCH /books/update/** - update one book with _id
* **POST /books/** - add one new book
* **DELETE /books/** - delete one book with _id