var express = require("express");
var app = express();
var bodyparse = require("body-parser");
app.use(bodyparse.urlencoded({extended: false}));
app.post("/form", function(req, res) {
	res.send(req.body.str.split('').reverse().join(''));
})
app.listen(process.argv[2]);