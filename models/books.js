const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
	title: { type: String, trim: true, required: true },
	author: { type: String, trim: true, required: true },
	subject: { type: String, trim: true, required: true },
	isbn: {
		type: String,
		trim: true,
		minlength: 8,
		maxlength: 10,
		required: true,
	},
	publishingDate: { type: Date },
});

module.exports = mongoose.model("Book", BooksSchema);
