/**
 * 
 */

var http = require("http");

http.createServer(/* @callback */ function (request,response){
	
	
	
	response.writeHead(200);
	//response.end(queryString.name);
	response.end();
	
	
}).listen(40006);
console.log("we are listenig");