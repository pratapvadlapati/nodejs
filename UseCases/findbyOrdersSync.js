var express = require("express");
var app = express();
var mysql = require("mysql");

// to fetch orderID with params

app.get('/orders/:orderId/', function (req, res) {
   // res.send(req.params.orderId)
   //console.log(req.params.orderId);
var orderId = (req.params.orderId);
//console.log(orderId);
var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "Passw0rd!",
	  database: "nodedb"
	});
var findOrderNO =  "SELECT orderNumber FROM orders WHERE orderNumber = 123";
    con.query(findOrderNO,function(err,orderno){
        if(err){
            throw err;
        }
         var no = orderno[0].orderNumber;
        //console.log(no);
        if (no == (+orderId)){
var crtProdOrders = "INSERT INTO productOrders (productId, orderId) VALUES ('MackbookPro','123')";
        con.query(crtProdOrders,function(err,prodOrders){
            if (err){
                throw err;
            }
            console.log("Prodct Order has created !")
         
         var findPrdOrds = "SELECT * FROM productOrders";
            con.query(findPrdOrds,function(err,prdord){
               if(err){
                   throw err;
               } 
               console.log(prdord);
            }) 
  
        })
    }else{
        var retprd = "SELECT * FROM product";
            con.query(retprd,function(err,prodlist){
                if(err){
                    throw err;
                }
                console.log(prodlist);
            })
        }
    })
})
app.listen(5000)


