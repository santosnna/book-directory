const TestBook = require("./models/books");
const helper = require("./helper");
const { mockBook } = require("./helper");

describe("CRUD Test", () => {
  beforeAll(async () => {
    const { dbConnection } = helper;
    await dbConnection();
  });

  afterAll(async () => {
    const { closeConnection } = helper;
    await TestBook.deleteMany({});
    await closeConnection();
  });

  it("should insert a book into Book collection", async () => {
    let { mockBook } = helper;

    const book = new TestBook(mockBook);
    const verification = await book.save();
    mockBook._id = book._id;

    expect(verification).toBeTruthy();
  });

  it("should find a book from Book collection", async () => {
    const insertedBook = await TestBook.findById(mockBook._id);
    console.log("Mock book", mockBook, typeof mockBook);
    console.log("Livro achou", insertedBook, typeof insertedBook);
    expect(insertedBook).toMatchObject(mockBook);
  });
});

/** The following redundancy is only to try different ways of achieving the same result */
describe("Consistency Test", () => {
  beforeAll(async () => {
    const { dbConnection } = helper;
    await dbConnection();
  });

  afterAll(async () => {
    const { closeConnection } = helper;
    await TestBook.deleteMany({});
    await closeConnection();
  });

  it("should insert a book into Book collection", async () => {
    let { mockBook } = helper;

    const book = new TestBook(mockBook);
    await book.save();
    mockBook._id = book._id;

    const insertedBook = await TestBook.findById(book._id);
    expect(insertedBook.toJSON()).toEqual(mockBook);
  });
});
