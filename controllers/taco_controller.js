const express = require('express');
const taco = require('../models/burger');
const router = express.Router();

// root directory renders index.handblebars
router.get("/", (req, res) => {
    taco.all((data) => {
        let hbsObject = {
            taco: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", (req, res) => {
    let tacoName = Object.keys(req.body);
    taco.insert("taco_name", tacoName[0], function() {
        console.log("why no reset?");
        res.redirect("/");
    });
});

router.put("/:id", (req, res) => {
    // id of clicked button
    let condition = "id = " + req.params.id;
    // change value to true - aka devoured!
    taco.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;