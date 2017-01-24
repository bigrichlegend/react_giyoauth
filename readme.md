01] we create package.json file using npm init
02] npm install express as a dependencies
03] create a node file caller server.js
04] We are using express to server or application so we need an express onject
var express = require('express');
//create our app
var app = express();
05] We need to tell which folder we want to serve. We use app.use for that
app.use(express.static('public'));
06] then start the server using app.listen which takes the port number
and a function to call
app.listen(3000, function(){
	console.log('Express is ready to go. Go to http://localhost:3000');
});
07] We next run node server to start our app
				node server.js
08]
