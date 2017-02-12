/**
 * Created by cchi on 2/12/2017.
 */
var express = require('express'); //web application frame work, also called express js

var app = express();

app.get('/', function(req,res){
   res.sendFile(__dirname + '/index.html');
});


app.post('/login',function(req,res){
    res.end("Login Successful.");
});

var port = process.env.port ||8080;
var server = app.listen(port, function(reg, res){
    console.log("Server running on port 8080");// http:localhost:3000
});

console.log("a-quote-a-day project started");