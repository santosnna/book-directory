var booksList = require("./books-data.json");

test("Checks whether books list is populated", () => {
  expect(booksList.length).toBeGreaterThanOrEqual(1);
});

test("Retrived book is the same as expected", () => {
  let expected = {
    id: "907e2966-df9a-4e91-88fd-c4208f77f445",
    isbn: "638246548-8",
    title: "Self-enabling multi-tasking ability",
    author: "Si Escott",
    subject: "Research and Development",
    publishingDate: "1937-09-26 15:17:37",
  };

  let book = booksList.find(
    (element) => element.id === "907e2966-df9a-4e91-88fd-c4208f77f445"
  );

  expect(book).toEqual(expected);
});
