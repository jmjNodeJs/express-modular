/**
 * Created by jmj on 9/8/16.
 */

/**
 * Import DB connection and other config
 * */

var randomstring = require("randomstring");


var UserModel = function () {
};

UserModel.prototype.validateUser = function (username, password) {
    var result = [];
    if (username == "admin" && password == "admin") {
        result = {
            "status": "success",
            "user": "ADMIN",
            "token": randomstring.generate()
        };
    } else {
        result = {
            "status": "fail",
            "message": "Invalid login attempt!",
            "details": "try admin | admin"
        };
    }
    return result;
};

module.exports = UserModel;