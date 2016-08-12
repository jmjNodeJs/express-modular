/**
 * Created by jmj on 9/8/16.
 */

var UserModel = require('./../model/UserModel');
var userModel = new UserModel();
var util = require('util');
var BaseController = require('./../../../controller/BaseController');
var baseController = new BaseController();

/** Constructor */
var IndexController = function () {

};


IndexController.prototype.authenticate = function (req, res) {

    req.checkBody('username', 'Invalid name').notEmpty();
    req.checkBody('password', 'Invalid password').notEmpty();
    var errors = req.validationErrors();

    if (errors) {
        res.send(baseController.prettyError(errors));
        return;
    }
    var post = req.body;

    res.send(userModel.validateUser(post.username, post.password));
};

module.exports = IndexController;