var PORT = 8081;

var express = require('express');
var app = express();
var path = require("path");
var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

})


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

/** Middle ware */
/*
 app.all('/secret', function (req, res, next) {
 console.log('Accessing the secret section ...');
 next(); // pass control to the next handler
 });
 */

/** Import Routes here */
app.use('/users', require('./modules/user/routes'));