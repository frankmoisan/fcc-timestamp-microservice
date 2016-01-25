'use strict';

var express = require('express');
var path = require('path');
var app = express();
var response = {unix: null, natural: null};

//app.use(express.static(__dirname + '/public'));

app.get('/:query', function(req, res) {
	var query = new Date(req.params.query);
	
	if (Object.prototype.toString.call(query) === '[object Date]') {
		if (!isNaN(query.getTime())) {
			var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

			response.unix = query.getTime();
			response.natural = months[query.getMonth()] + ' ' + query.getDate() + ', ' + query.getFullYear();
		}
	}
	
	res.writeHead(200, { 'Content-Type': 'application/json'});
	res.end(JSON.stringify(response));
});

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(process.env.PORT || 8080 || 5000);