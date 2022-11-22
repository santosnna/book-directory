const mongoose = require("mongoose");
const Book = require("../models/books");
const booksList = require("./books-data.json");

mongoose.connect("mongodb://localhost:27017/book-directory", {
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  await Book.deleteMany({});
  for (let i = 0; i < booksList.length; i++) {
    const book = new Book(booksList[i]);
    await book.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
