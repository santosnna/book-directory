/** CONST DECLARATION */
const bodyParser = require("body-parser");
const express = require("express");
const ejsMate = require("ejs-mate");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const path = require("path");

const Book = require("./models/books");
const ExpressError = require("./utils/ExpressError");
const catchAsync = require("./utils/catchAsync");
const { bookValidationSchema } = require("./validationSchema");

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

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/** FUNCTIONS */
const validateBook = (req, res, next) => {
	const { error } = bookValidationSchema.validate(req.body);
	if (error) {
		const msg = error.details.map((el) => el.message).join(",");
		throw new ExpressError(msg, 400);
	} else {
		next();
	}
};

/** ENDPOINTS */
app.get("/", (req, res) => {
	res.render("home");
});

app.get(
	"/books",
	catchAsync(async (req, res) => {
		const booksList = await Book.find({});
		res.render("books/index", { pageTitle: "Index", booksList });
	})
);

app.get("/books/new", (req, res) => {
	res.render("books/new", { pageTitle: "New book" });
});

/**
 * 'book' is an object passed through the req.body object
 */
app.post(
	"/books",
	validateBook,
	catchAsync(async (req, res) => {
		const book = new Book(req.body.book);
		await book.save();
		res.redirect(`/books/${book._id}`);
	})
);

app.get(
	"/books/:id",
	catchAsync(async (req, res) => {
		const { id } = req.params;
		const book = await Book.findById(id);
		res.render("books/show", { pageTitle: book.title, book });
	})
);

app.get(
	"/books/:id/edit",
	catchAsync(async (req, res) => {
		const { id } = req.params;
		const book = await Book.findById(id);
		res.render("books/edit", { pageTitle: book.title, book });
	})
);

app.patch(
	"/books/:id",
	validateBook,
	catchAsync(async (req, res) => {
		const { id } = req.params;
		const updatedBook = req.body.book;
		/** The spreaded object "updatedBook" is like a "copy" and will override only the modified fields  */
		const book = await Book.findByIdAndUpdate(
			id,
			{ ...updatedBook },
			{ new: true }
		);
		res.redirect(`/books/${id}`);
	})
);

app.get(
	"/books/:id/delete",
	catchAsync(async (req, res) => {
		const { id } = req.params;
		const book = await Book.findById(id);
		res.render("books/delete", { pageTitle: book.title, book });
	})
);

app.delete(
	"/books/:id",
	catchAsync(async (req, res) => {
		const { id } = req.params;
		await Book.findByIdAndDelete(id);
		res.redirect("/books");
	})
);

app.all("*", (req, res, next) => {
	next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
	const { statusCode = 500 } = err;
	if (!err.message) err.message = "Oh no, something went wrong... :(";
	res.status(statusCode).render("error", { pageTitle: err.message, err });
	next(err);
});

/** SERVER */
app.listen(3000, () => console.log("Listening on port 3000"));
