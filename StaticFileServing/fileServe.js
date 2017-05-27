/**
 * 
 */
var cfenv = require("cfenv");
var express = require("express");
var app = express();
var http = require("http");
var fs = require("fs");
var appEnv = cfenv.getAppEnv();
var router = express.Router();

router.use(function (request, response,next) {
	response.end("welcome to NodejsApp, Please use proper url to access the files.")
	//console.log(req.method, req.url);
	next();
});

app.get('/static', function (request, response) {
    console.log(request.method, request.url);
	//console.log(`Incomming request: ${request.url}`);

	if (request.url.startsWith("/static/")) {
		fs.readFile(request.url.substr(1), function (error, data) {
			if (error) {
				console.log("file not found:" + error);
				response.statusCode = 404;
				response.end();
				return;
				
			}
			response.end(data);
		});
		return;
	}

	response.end("Hello world");

})
app.use("/",router);
app.listen(appEnv.port, appEnv.bind, function () {
	console.log('server started on:' + appEnv.url);
});