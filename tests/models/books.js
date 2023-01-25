const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  subject: String,
  publishingDate: Date,
});

module.exports = mongoose.model("Book", BooksSchema);
