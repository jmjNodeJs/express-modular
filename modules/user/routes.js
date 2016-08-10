/**
 * Created by jmj on 9/8/16.
 */
var path = require("path");
var express = require('express');
var router = express.Router();
__dirname = path.resolve(path.dirname(''));

var Animal = require('../../controller/TestController');
// var animal = new Animal();
var IndexController = require('./controller/IndexController');
var indexController = new IndexController();

router.get('/', indexController.getUser);
router.get('/test', Animal.walk());

module.exports = router;
