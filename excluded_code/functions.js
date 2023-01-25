const fs = require("fs");

var file = "./books-data.json";

function append_new_book_to_json_file(newBook) {
  fs.readFile(file, "utf-8", (err, data) => {
    let json = JSON.parse(data);
    json.push(newBook);
    fs.writeFile(file, JSON.stringify(json, null, 2), (err) => {
      if (err) throw err;
    });
  });
}

module.exports = { append_new_book_to_json_file };
