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
    taco.insert("taco_name", req.body.taco_name, function() {
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