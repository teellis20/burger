var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.all(function(burger_db){
        console.log(burger_db);
        res.render("index",{ burger_db });
    })
});

router.put("/burgers/update", function(req, res) {
    burger.insert(req.body.burger_id, function(result) {
        console.log(result);
        res.redirect("/");
    })
})

module.exports = router;