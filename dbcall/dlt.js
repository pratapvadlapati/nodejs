/**
 * 
 */
var mysql = require('mysql');

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
	    //response.json(rows);
	  });
	
  
  
  
  
});