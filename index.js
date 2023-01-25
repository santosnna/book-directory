const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Book = require("./models/books");

mongoose.connect("mongodb://localhost:27017/book-directory", {
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const booksList = await Book.find({});
  res.send(booksList);
});

app.get("/new", (req, res) => {}); // Will contain a form to add new registers

app.post("/new", async (req, res) => {
  const book = new Book(req.body); // In the future req.body.book
  await book.save();
  res.redirect(`/book/${book._id}`);
});

app.get("/book/:id", async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.send(book);
});

app.get("/update", (req, res) => {}); // Will contain a form to update fields

app.put("/update", (req, res) => {}); // Will handle register update

app.get("/delete", (req, res) => {}); // Will contain a page to certify the exclusion

app.delete("/delete", (req, res) => {}); // Will handle register deletion

app.listen(3000, () => console.log("Listening on port 3000"));
