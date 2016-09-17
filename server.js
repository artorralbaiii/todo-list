'use strict'

// Vendor Modules

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/app/views/index.html');
});

app.listen(3000, function(){
	console.log('Server is running on port: %d', 3000);
});

