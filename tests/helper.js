const mongoose = require("mongoose");

module.exports = {
  mockBook: {
    __v: 0,
    isbn: "638246548-8",
    title: "Self-enabling multi-tasking ability",
    author: "Si Escott",
    subject: "Research and Development",
    publishingDate: new Date("1937-09-26T15:17:37.000Z"),
  },

  // Functions
  dbConnection: async function () {
    return mongoose.connect("mongodb://localhost:27017/book-directory-tests", {
      useUnifiedTopology: true,
    });
  },

  closeConnection: async function () {
    return mongoose.connection.close();
  },
};
