/**
 * Created by cchi on 2/12/2017.
 */
var express = require('express'); //web application frame work, also called express js

var app = express();

app.get('/', function(request,response){
   response.sendFile(__dirname + '/index.html');
});



var port = process.env.port ||8080;

var server = app.listen(port, function(reg, res){
    console.log("Server running on port 8080");// http:localhost:3000
});

console.log("a-quote-a-day project started");