var express = require('express'); //commonjs - sintax to import packages
//import doesn't work in node
var app = express(); //create an express server
app.get('/', function(request, response, next){
    return response.send("Hello world");
});
app.listen(3000, function () {
console.log("My first express server listening on 3000")
});//needs a port number

// on localhost:3000/test the message cannot GET test is the default 404 error message
