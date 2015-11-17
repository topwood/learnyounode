var fs = require('fs');
var file = process.argv[2];
var txt = fs.readFileSync(file).toString();
console.log(txt.split('\n').length-1);