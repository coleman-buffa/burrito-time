const connection = require('./connection.js');

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The below helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

const orm = {

	selectAll: function(tableInput, cb) {
		const queryStr = "SELECT * FROM " + tableInput + ";";
		connection.query(queryStr, function(err, result) {
			if (err) throw err;
			cb(result);
		})
	},

	insertOne: function(table, cols, vals, cb) {
		let queryStr = "INSERT INTO " + table;

		queryStr += " (";
		queryStr += cols.toString();
		queryStr += ") ";
		queryStr += "VALUES (";
		queryStr += printQuestionMarks(vals.length);
		queryStr += ") ";

		console.log(queryStr);

		connection.query(queryStr, vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	updateOne: function() {

	}
}

module.exports = orm;