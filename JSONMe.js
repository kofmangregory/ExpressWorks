var express = require("express");
var app = express();
var fs = require('fs');
app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function(error, data) {
		if (error) {
			return res.sendStatus(500);
		}
		try {
			books = JSON.parse(data);
		} catch (error) {
			res.sendStatus(500);
		}
		res.json(books);
	})
})

app.listen(process.argv[2]);