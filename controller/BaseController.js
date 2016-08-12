/**
 * Created by jmj on 10/8/16.
 */

function BaseController() {

}

BaseController.prototype.myResponse = function () {

    console.log('BaseController.myResponse calling...');

};

Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

BaseController.prototype.prettyError = function (errors) {
    var response = {};
    errors.forEach(function (row) {
        response[row.param] = row.msg;
    });

    // console.log(response);
    return response;
};

module.exports = BaseController;
