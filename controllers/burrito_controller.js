const express  = require('express');
//Import the model to use its database functions
const burrito = require('../models/burrito.js');

const router = express.Router();

router.get('/', function(req, res) {
	burrito.selectAll(function(data) {
		let hbsObject = {
			burritos: data
		};
		console.log(hbsObject);
		res.render('index', hbsObject);		
	});
});

router.post('/api/burritos', function(req, res) {
	burrito.insertOne([
		"burrito_name", "devoured"
	], [
		req.body.burrito_name, req.body.devoured
	], function(result) {
		res.json({ id: result.insertId });
	});
});

module.exports = router;