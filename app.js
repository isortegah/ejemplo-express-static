/**
 * Created by ISORTEGAH on 19/10/2016
 */
 var express = require('express');
 var app     = express();
 var http    = require('http');
 var port    = process.env.PORT || 3000;

 app.use(express.static('public'));
 app.use('/view',express.static('view'));
 var server = http.createServer(app);
 server.listen(port)
 console.log("\n//////////////////////////////////////////////");
 console.log("////// http server listening on %d /////////", port);
 console.log("//////////////////////////////////////////////");