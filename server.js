// Requires
var connect = require('connect');
var url = require('url');

var app = connect();

// Fallback page
var fallback = function(req, res, next) {
    res.end('URL not found. Try http://localhost:3000/lab3?method=add&x=16&y=4');
};

var calculate = function(req, res, next) {
	// Get the method, x, and y vars from URL
    var query = url.parse(req.url, true).query;
    var method = query.method;
    var x = parseInt(query.x);
    var y = parseInt(query.y);
	//Switch the method to do the correct calculatotion
	switch(method){
		case 'add':
			res.end (x + ' + ' + y + ' = ' + (x+y));
		case 'subtract':
			res.end (x + ' - ' + y + ' = ' + (x-y));
		case 'multiply':
			res.end (x + ' * ' + y + ' = ' + (x*y));
		case 'divide':
			res.end (x + ' / ' + y + ' = ' + (x/y));
	}
    // Message if the type in an invalid method
	res.end ('Error in one of the parameters');
};

app.use('/lab3', calculate);
app.use(fallback); // Fallback URL

// Start the server
app.listen(3000);
console.log('Server running on port 3000');