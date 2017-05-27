/**
 * 
 */

var fs = require("fs");

var file = fs.readFile('input.txt', function(err,file){
	if(err) return console.log(err.message);
	console.log(file.toString());
	
});

console.log('program ended');


