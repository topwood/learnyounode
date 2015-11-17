var fs = require('fs');
var path = require('path');
var filepath = process.argv[2];
var list_ext = process.argv[3];

fs.readdir(filepath,function(err,list){
	list.forEach(function(file){
		if(path.extname(file) === '.'+list_ext){
			console.log(file);
		}
	})
});