var express = require('express');

//create our app
var app = express();
//tell which folder we want to serve. We use app.use for that
app.use(express.static('public'));
//then start the server using app.listen which takes the port number
//and a function to call
app.listen(3000, function(){
  console.log('Express is ready to <br>go to http://localhost:3000');
});
