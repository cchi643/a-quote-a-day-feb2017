/**
 * Created by cchi on 2/12/2017.
 */
var express = require('express'); //web application frame work, also called express js

var app = express();

app.get('/', function(request,response){

    response.sendFile(__dirname+'/index.html');
});


var port = process.env.PORT || 8080;

var server = app.listen(port, function(req, res){
    console.log("catch the action at http://localhost:" +port);// http:localhost:3000
});
