const orm = require("../config/orm");

// table to create/read/update
const table = "tacos";

const taco = {
    all: (cb) => {
        orm.selectAll(table, res => { cb(res) })
    },
    insert: (cols, vals, cb) => {
        orm.insertOne(table, cols, vals, res => { cb(res) })
    },
    update: (objColVals, condition, cb) => {
        orm.updateOne(table, objColVals, condition, res => { cb(res) })
    }
}

module.exports = taco;