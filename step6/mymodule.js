var fs = require('fs');
var path = require('path');
module.exports = function(filepath,ext,cb){
	fs.readdir(filepath,function(err,list){
		if(err)
			return cb(err)
		cb(null,list.filter(function(file){
			return '.'+ext === path.extname(file);
		}));
	})
}