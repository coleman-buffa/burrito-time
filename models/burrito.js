//Import the ORM to create functions that will interact with the database
const orm = require('../config/orm.js');

const burrito = {
	
	selectAll: function(cb) {
		orm.selectAll('burritos', function(res) {
			cb(res);
		});
	},

	insertOne: function() {
		orm.insertOne();
	},
	
	updateOne: function() {
		orm.updateOne();
	}
};

//Export the database functions for the controller (burritoController.js)
module.exports = burrito;