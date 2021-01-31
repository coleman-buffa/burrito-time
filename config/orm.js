const connection = require('./connection.js');

const orm = {

	selectAll: function(tableInput, cb) {
		const queryStr = "SELECT * FROM " + tableInput + ";";
		connection.query(queryStr, function(err, result) {
			if (err) throw err;
			cb(result);
		})
	},

	insertOne: function() {

	},

	updateOne: function() {

	}
}

module.exports = orm;