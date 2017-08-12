const express = require('express');
const taco = require('../models/burger');
const router = express.Router();

// root directory renders index.handblebars
router.get("/", function(req, res) {
    taco.all(function(data) {
        let hbsObject = {
            taco: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    taco.insert("taco_name", req.body.taco_name, function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    taco.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;