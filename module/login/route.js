/**
 * Created by jmj on 9/8/16.
 */

/** Why keep individual routes for Modules
 * -> Keep it as simple that will easily trackball
 * -> Each module can manage separately by its routing
 * -> Route modification is easy
 */


var express = require('express');
var router = express.Router();

var LoginController = require('./controller/LoginController');
var loginController = new LoginController();

// Easily understandable as Controller -> actionCall
/** Login request, It must be POST method */
router.post('/', loginController.authenticate);

module.exports = router;
