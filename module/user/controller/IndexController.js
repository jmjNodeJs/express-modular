/**
 * Created by jmj on 9/8/16.
 */

var url = require('url');
var IndexModel = require('../model/IndexModel');
var indexModel = new IndexModel();
var util = require('util');

// var BaseController = require('../../../controller/BaseController');


/** Constructor */
var IndexController = function () {
    // Assign Default or Use DI
    this.otp = 1596;

};


IndexController.prototype.newOtp = function () {
    console.log(this.otp);
};

IndexController.prototype.getUser = function (req, res, next) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var user = 'No record found';
    console.log(query); //{Object}
    try {
        user = indexModel.getUserById(query.id);
    } catch (e) {

    }

    res.send(user);
};

IndexController.prototype.getUserFromId = function (req, res, next) {

    var id = req.params.id;
    var user = 'No record found';
    try {
        user = indexModel.getUserById(id);
    } catch (e) {

    }

    res.send(user);
};


module.exports = IndexController;