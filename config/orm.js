const connection = require("../config/connection");

// Helper function for SQL syntax.
function objToSql(ob) {
    let arr = [];

    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            arr.push(key + "=" + ob[key]);
        }
    }

    return arr.toString();
}

const orm = {
    selectAll: (tableInput, cb) => {
        // pull all rows in table
        let queryString = `SELECT * FROM ` + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },
    insertOne: (table, cols, vals, cb) => {
        // insert new taco
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ", devoured) ";
        queryString += "VALUES ('";
        queryString += vals.toString();
        queryString += "', false) ";

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: (table, objColVals, condition, cb) => {
        // update taco to devoured
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

module.exports = orm;