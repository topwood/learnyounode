var adds = process.argv.slice(2);
var sum = 0;
for (var i = 0; i < adds.length; i++) {
	sum+= +adds[i];
};
console.log(sum);