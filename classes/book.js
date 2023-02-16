class Book {
  constructor(isbn, title, author, subject) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.subject = subject;
  }

  save() {
    // saves book to MongoDB
  }

  edit() {
    // sends editing data to MongoDB
  }

  delete() {
    // deletes book from MongoDB
  }
}
