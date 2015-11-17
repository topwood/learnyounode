var net = require('net');

var mo = function(num){
	if(num<10)
		return '0'+num;
	return '' + num;
}
var format = function(date){
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();

	return ''+year+'-'+mo(month)+'-'+mo(day)+' '+mo(hour)+':'+mo(min);

}
var server = net.createServer(function(socket) {
	var date = format(new Date());
	socket.end(date);
})
server.listen(process.argv[2])