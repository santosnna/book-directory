const express = require("express");

const app = express();

var books = [
  {
    id: 1,
    name: "ABC",
    author: "DEF",
    yearPublished: 1950,
  },
];

app.get("/", (req, res) => {
  res.send(books);
});

app.listen(3000, () => console.log("Listening on port 3000"));
