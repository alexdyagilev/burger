
var connection = require("./connection");

var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if(err) throw err;
            cb(data);
        });
    },
    insertOne: function (name, devoured, date) {
        connection.query("INSERT INTO burgers(burger_name, devoured, date) VALUES(?, ?, ?)", [name, devoured, date], function (err, data) {
            if(err) throw err;
            console.log("New burger has been added!");
        });
    },
    updateOne: function (id) {
        connection.query("UPDATE burgers SET devoured= false WHERE ID = ?", [id], function (err, data) {
            if(err) throw err;
            console.log("Burger has been devoured!");
        });
    }
};

module.exports = orm;