const express = require("express");
const bodyParser = require("body-parser");
const { append_new_book_to_json_file } = require("./functions");

const app = express();

var books = require("./books-data.json");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(books);
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  var book = books.find((element) => element.id.$oid === id);
  res.send(book);
});

app.post("/new", (req, res) => {
  let newBook = req.body;
  append_new_book_to_json_file(newBook);
  res.send(newBook);
});

app.listen(3000, () => console.log("Listening on port 3000"));
