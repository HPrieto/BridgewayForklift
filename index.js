var express = require('express'),
	app 	= express(),
	server 	= require('http').createServer(app),
	port	= process.env.PORT || 3000,
	path    = require('path');

//CSS File Directory
app.use(express.static(path.join(__dirname, 'bridgeway')));

//route handler GET /
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/bridgeway/index.html');
});

app.get('/home', function(req, res) {
	res.sendFile(__dirname + '/bridgeway/index.html');
});

//listen to port
server.listen(port, function() {
	console.log('Bridgeway running on port ' + port);
});