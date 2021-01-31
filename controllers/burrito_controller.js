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

module.exports = router;