/**
 * 
 */
var http = require("http");

http.createServer(function (request,response){
	
		response.writeHead(200,{'Content-Type': 'text/plain'});

	response.end('Hellow World');
	
	
}).listen(30001)

console.log('Server running')

