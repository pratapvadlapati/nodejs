/**
 *This is the basic script to fetch details of the query params from the database dynamically.
 *Only for learning purpose ,,because it cannot handle multiple requests concurrently.
 */
/**calling url should be like,,
 * http://localhost:30007?product=mobile&brand=samsung&type=s8
 * 
 */
var http = require("http");
var url= require("url");
var mysql = require('mysql');

http.createServer(function (request,response){
	
	var queryString=url.parse(request.url,true).query;
	var product=(queryString.product);
	var brand =(queryString.brand);
	var type=(queryString.type);
	console.log(product,brand,type);
	console.log('Give us a moment we are fetching the details....!')
	dbcall(function(err,result){
	response.writeHead(200,{'Content-Type' : 'x-appliacton/json'});
	response.end(result);

	
	//response.end(queryString.product);
	
	
	// Establishing database connection 
function dbcall(){
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "Passw0rd!",
	  database: "nodedb"
	});


	  con.connect(function(err) {
		  if (err) throw err;
		  console.log("Connected!");
		  con.query('select * from STOCK', function (err, rows) {
		    if (err) throw err;
		    //console.log("Result: " + result);
		    console.log(rows);
		    //response.end(rows);
		  });
};
}).listen(60007)

//console.log('Give us a moment we are fetching the details....!')

//console.log('we listen at http://localhost:30007?product=$produuct&brand=b$brand&type=$type');

