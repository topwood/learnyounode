var http = require('http');
var urls = process.argv.slice(2);
var len = urls.length;

var count = 0;
var result = {};
urls.forEach(function(url) {
	http.get(url, function(response) {
		response.setEncoding('utf-8');
		var buf = "";
		response.on('data', function(data) {
			buf += data;
		});
		response.on('end', function() {
			count++;
			result[url] = buf;
			if(count === len){
				urls.forEach(function(u){
					console.log(result[u]);
				});
			}
		})
	})
});