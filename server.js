const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

//Serve static content for the app from the public directory
app.use(express.static('public'));

//Parse application body as JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Set Handlebars
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Import routes and give them to the server
const routes = require('./controllers/burrito_controller.js');

app.use(routes);

//Start server so it can listen for client requests
app.listen(PORT, function() {
	console.log('Server litening on http://localhost:' + PORT);
})