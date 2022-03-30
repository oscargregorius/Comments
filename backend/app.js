const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const path = require("path");
const util = require("util");

const app = express();

app.use(bodyParser.json());

const db_name = path.join("./comments.db");
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'comments.db'");
});

db.all = util.promisify(db.all);
db.run = util.promisify(db.run);

app.listen(4000, () => {
  console.log("Server started port: 4000");
});
