const express = require("express");
const bodyParser = require("body-parser");
var books = require("./books-data.json");

const app = express();
const { append_new_book_to_json_file } = require("./functions");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(books);
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  var book = books.find((element) => element.id === id);
  res.send(book);
});

app.get("/new", (req, res) => {}); // Will contain a form to add new registers

app.post("/new", (req, res) => {
  let newBook = req.body;
  append_new_book_to_json_file(newBook);
  res.send(newBook);
  // res.redirect("/" + newBook.id);
});

app.get("/update", (req, res) => {}); // Will contain a form to update fields

app.put("/update", (req, res) => {}); // Will handle register update

app.get("/delete", (req, res) => {}); // Will contain a page to certify the exclusion

app.delete("/delete", (req, res) => {}); // Will handle register deletion

app.listen(3000, () => console.log("Listening on port 3000"));
