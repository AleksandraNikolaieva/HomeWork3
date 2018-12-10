var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	switch(req.url) {
		case '/':
			res.end('Hello World');
			break;
		case '/about':
			console.log('url: ', req.url);
			console.log('method:', req.method);
			console.log('headers:\n', req.headers);
			res.end();
			break;
		case '/stop':
			this.close();
			res.end();
			break;
		case '/contact':
			fs.readFile('contacts.html', function(err, data) {
				if(err) res.end('Resourse not found');
				res.end(data);
			})
			break;
		default:
			res.end('Wrong adress');
	}
}).listen(3000);