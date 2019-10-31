var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            console.log(result);
            console.log("this is in the orm. find all")
            cb(result);
        });
},
    insertOne: function(whatInsert, whereInsert, id, cb) {
        var queryString = "INSERT ?? WHERE ?? = ?";
        connection.query(queryString, [whatInsert, whereInsert, id], function(err, result) {
            if(err) throw err;
            console.log(result);
            cb(result);
        });
},
    updateOne: function(param, cb) {
        var queryString = "UPDATE burgers SET devoured=true WHERE id= ?";
        connection.query(queryString, [param], function(err, result) {
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    }
}

module.exports = orm;