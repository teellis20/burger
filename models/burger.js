var orm = require("../config/orm.js");

var burger = {
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    insert: function(id, cb) {
        orm.insertOne("burgers", id, cb);
    }
    
}

module.exports = burger;