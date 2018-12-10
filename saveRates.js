//without Server

const request = require('request');
const fs = require('fs');
const open = require('open');
const url = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

request(url, function(err, response, body) {
	if(err) throw err;
	var curencies = JSON.parse(body);
	fs.appendFileSync('newRates.html', '<table border="1" cellspacing="0">\n');
	fs.appendFileSync('newRates.html', '\t<caption>UAH rates table</caption>\n');
	fs.appendFileSync('newRates.html', '\t<tr>\n\t\t<th>Currency</th>\n\t\t<th>Buy</th>\n\t\t<th>Sale</th>\n\t</tr>\n');
	for(var i = 0; i < curencies.length; i++) {
		fs.appendFileSync('newRates.html', '\t<tr>\n');
		fs.appendFileSync('newRates.html', '\t\t<td>' + curencies[i].ccy + '</td>\n');
		fs.appendFileSync('newRates.html', '\t\t<td>' + (+curencies[i].buy).toFixed(2) + '</td>\n');
		fs.appendFileSync('newRates.html', '\t\t<td>' + (+curencies[i].sale).toFixed(2) + '</td>\n');
		fs.appendFileSync('newRates.html', '\t</tr>\n');
	}
	fs.appendFileSync('newRates.html', '</table>');
	open('newRates.html');
})