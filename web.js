var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
var fs = require("fs");
var text = fs.readFile('./index.html', "utf8", function(error, data) {
  response.end( text.toString() ); 
});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
