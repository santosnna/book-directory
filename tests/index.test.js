const TestBook = require("./models/books");
const helper = require("./helper");
let { mockBook } = require("./helper");

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
    const book = new TestBook(mockBook);
    const createdBook = await book.save();
    mockBook._id = book._id;
    expect(createdBook).toBeTruthy();
  });

  it("should find a book from Book collection", async () => {
    const insertedBook = await TestBook.findById(mockBook._id);
    expect(insertedBook).toMatchObject(mockBook);
  });

  it("should find a Book in collection and update it", async () => {
    mockBook.subject = "Rocket Science";
    const updatedBook = await TestBook.findByIdAndUpdate(
      mockBook._id,
      { ...mockBook },
      { new: true }
    );
    expect(updatedBook).toMatchObject(mockBook);
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
    const book = new TestBook(mockBook);
    await book.save();
    mockBook._id = book._id;
    const insertedBook = await TestBook.findById(book._id);
    expect(insertedBook.toJSON()).toEqual(mockBook);
  });
});
