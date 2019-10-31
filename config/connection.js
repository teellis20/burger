require("dotenv").config();
var mysql = require("mysql");
var keys = require("../key/keys.js");

var connection = mysql.createConnection({
    host: keys.db.host,
    port: 3306,
    user: keys.db.username,
    password: keys.db.password,
    database: "burgers_db"
});

// Connect to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection
  module.exports = connection;