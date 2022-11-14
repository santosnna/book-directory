const express = require("express");

const app = express();

var books = require("./books-data.json");

app.get("/", (req, res) => {
  res.send(books);
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  var book = books.find((element) => element.id.$oid === id);
  res.send(book);
});

app.listen(3000, () => console.log("Listening on port 3000"));
