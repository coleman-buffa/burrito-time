const express = require('express');
//Import the model to use its database functions
const burrito = require('../models/burrito.js');

const router = express.Router();

router.get('/', function (req, res) {
	burrito.selectAll(function (data) {
		let hbsObject = {
			burritos: data
		};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/api/burritos', function (req, res) {
	burrito.insertOne([
		"burrito_name", "devoured"
	], [
		req.body.burrito_name, req.body.devoured
	], function (result) {
		res.json({ id: result.insertId });
	});
});

router.put("/api/burritos/:id", function (req, res) {
	let condition = "id = " + req.params.id;

	console.log("condition", condition);

	console.log(req.body);
	console.log(req.body.devoured);

	burrito.updateOne({
		devoured: req.body.devoured
	}, condition, function (result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;