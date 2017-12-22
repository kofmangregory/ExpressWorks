var express = require("express");
var app = express();
var portNum = parseInt(process.argv[2]);
app.get('/home', function(req, res) {
	res.end("Hello World!");
})
app.listen(portNum);