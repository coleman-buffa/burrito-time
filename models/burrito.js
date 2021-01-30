//Import the ORM to create functions that will interact with the database
const orm = require('../config/orm.js');

const burrito = {
	
	selectAll: function() {
		orm.selectAll();
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