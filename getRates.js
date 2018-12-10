//with Server

var http= require('http');
var request = require('request');
var url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

http.createServer(function(req, res) {
	request(url, function(err, response, body) {
		if(err) throw err;
		var curencies = JSON.parse(body);
		res.write('<table border="1" cellspacing="0">');
		res.write('<caption>UAH rates table</caption>');
		res.write('<tr><th>Currency</th><th>Buy</th><th>Sale</th></tr>');
		for(var i = 0; i < 4; i++) {
			res.write('<tr>');
			res.write('<td>' + curencies[i].ccy + '</td>');
			res.write('<td>' + (+curencies[i].buy).toFixed(2) + '</td>');
			res.write('<td>' + (+curencies[i].sale).toFixed(2) + '</td>');
			res.write('</tr>');
		}
		res.write('</table>');
		res.end();
	})
}).listen(3000);