var mysql = require('mysql');

var connection = mysql.createConnection({
    "host"     : "mysql15.cems.uwe.ac.uk",
    "user"     : "fet22071643",
    "password" : "4NPp9r",
    "database" : "fet22071643"
});

connection.connect(function(err){
	if (err) {
    	console.error("Connection error: ", err.message);    
	} else {
    	console.log("Connected as: ", connection.threadId);    
	}
});
