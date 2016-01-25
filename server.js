'use strict';

var express = require('express');
var app = express();
var response = {unix: null, natural: null};

app.get('/:query', function(req, res) {
	var query = new Date(req.params.query);
	
	if (Object.prototype.toString.call(query) === '[object Date]') {
		if (!isNaN(query.getTime())) {
			//var year = query.getFullYear();
			//var month = query.getMonth();
			//var day = query.getDate();
			var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			//var naturalDate = months[month] + ' ' + day + ', ' + year;
			
			response.unix = query.getTime();
			response.natural = months[query.getMonth()] + ' ' + query.getDate() + ', ' + query.getFullYear();
		}
	}
	
	res.writeHead(200, { 'Content-Type': 'application/json'});
	res.end(JSON.stringify(response));
});

app.get('/', function(req, res) {
	var index = 'Hello world!';
	res.writeHead(200, { 'Content-Type': 'application/json'});
	res.end(index);
});

app.listen(8080);