/******  EXTERNAL CONFIG  *******************************
 ********************************************************/
var PORT = 9000;

/****** IMPORT ALL MODULES THAT WE REQUIRED  ***********
 ********************************************************/

var express = require('express');
var path = require("path");
var bodyParser = require("body-parser");


/************ BINDING TO SERVER *************************
 /********************************************************/
var app = express();
var server = app.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)

})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*********** SETTING FOR RESPONSE HEADER ****************
 /********************************************************/
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Json content type
    res.setHeader('Content-Type', 'application/json');
    // Pass to next layer of middleware
    next();
});




/********* GET request **********************************
 /********************************************************/
// simple GET request
// eg:  http://localhost:9000
app.get('/', function (req, res) {
    var port = server.address().port;

    res.send(["Welcome to Express Modular Architecture. You are at PORT " + port]);
});

// Return the contents what you send
// eg: http://localhost:9000/response?name=JMJ&message=Its working fine...!
app.get('/response', function (req, res) {
    console.log(req.query);// All parameters in get
    var output = {
        "message": "Welcome " + req.query.name,
        "details": req.query
    };
    res.send(output);
});


/********* POST request **********************************
 /********************************************************/
// simple post at ROOT
// eg : http://localhost:9000/post
app.post('/post', function (req, res) {
    res.send(['Your POSt request working fine...!']);
});
// Return the content what you send in post
// The POST data/ Form content should be formatted to -> application/x-www-form-urlencoded
// Angular2 provided as default application/x-www-form-urlencoded
// name: YourName
// place: YourPlace
app.post("/post/response", function (req, res) {
    var name = " Nameless wonder..!"

    if (req.body.name !== undefined) { // Simple validation
        name = req.body.name;
    }
    var output = {
        "message": "Welcome " + name,
        "details": req.body
    };
    res.send(output);

});



/** Importing routes for each Modules */
app.use('/users', require('./modules/user/route'));