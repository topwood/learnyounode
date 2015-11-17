var http = require('http')
var url = require('url');
var server = http.createServer(function(req, res) {
	var u = url.parse(req.url, true);
	var date = new Date(u.query.iso);
	switch (u.pathname) {
		case '/api/parsetime':
			var time = {};
			time.hour = date.getHours();
			time.minute = date.getMinutes();
			time.second = date.getSeconds();
			res.end(JSON.stringify(time));
			break;
		case '/api/unixtime':
			res.end(JSON.stringify({
				unixtime: date.getTime()
			}));
			break;
		default:

			break;
	}
})
server.listen(process.argv[2])