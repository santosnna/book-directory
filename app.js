/** CONST DECLARATION */
const bodyParser = require("body-parser");
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");

const Book = require("./models/books");

const app = express();

/** DATABASE CONNECTION */
mongoose.connect("mongodb://localhost:27017/book-directory", {
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

/** EXPRESS SETTINGS */
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/** ENDPOINTS */
app.get("/books", async (req, res) => {
  const booksList = await Book.find({});
  res.render("books/index", { pageTitle: "Index", booksList });
});

app.get("/books/new", (req, res) => {
  res.render("books/new", { pageTitle: "New book" });
});

/**
 * 'book' is an object passed through the req.body object
 */
app.post("/books", async (req, res) => {
  const book = new Book(req.body.book);
  try {
    await book.save();
    res.redirect(`/books/${book._id}`);
  } catch (error) {
    console.error("There was an error: ", error);
    // Add error handling in the future
    // Redirect to "/new" with a message indicating there was an error (maybe with next()?)
  }
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  res.render("books/show", { pageTitle: book.title, book });
});

app.get("/books/:id/edit", async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  res.render("books/edit", { pageTitle: book.title, book });
});

app.patch("/books/:id", async (req, res) => {
  const { id } = req.params;
  const updatedBook = req.body.book;
  try {
    /** The spreaded object "updatedBook" is like a "copy" and will override only the modified fields  */
    const book = await Book.findByIdAndUpdate(
      id,
      { ...updatedBook },
      { new: true }
    );
    res.redirect(`/books/${id}`);
  } catch (error) {
    console.error("There was an error: ", error);
    // Add error handling in the future
    // Redirect to "/new" with a message indicating there was an error (maybe with next()?)
  }
});

app.get("/books/:id/delete", async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);
  res.render("books/delete", { pageTitle: book.title, book });
});

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.redirect("/books");
  } catch (error) {
    console.error("There was an error: ", error);
    // Add error handling in the future
    // Redirect to "/new" with a message indicating there was an error (maybe with next()?)
  }
});

/** SERVER */
app.listen(3000, () => console.log("Listening on port 3000"));
