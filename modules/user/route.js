/**
 * Created by jmj on 9/8/16.
 */

/** Why keep individual routes for Modules
 * -> Keep it as simple that will easily trackball
 * -> Each module can manage separately by its routing
 * -> Route modification is easy
 */
var path = require("path");
var express = require('express');
var router = express.Router();
__dirname = path.resolve(path.dirname(''));

var IndexController = require('./controller/IndexController');
var indexController = new IndexController();

// Easily understandable as Controller -> actionCall

router.get('/', indexController.getUser);
router.get('/:id', indexController.getUserFromId);

module.exports = router;
