const orm = require("../config/orm");

const taco = {
    all: function(cb) {
        orm.selectAll("tacos", function(res) {
            cb(res);
        })
    },
    insert: function(cols, vals, cb) {
        orm.insertOne("tacos", cols, vals, function(res) {
            cb(res);
        })

    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("tacos", objColVals, condition, function(res) {
            cb(res);
        })
    }
}

module.exports = taco;