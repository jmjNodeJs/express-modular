/**
 * Created by jmj on 9/8/16.
 */

/**
 * Import DB connection
 * */

var USERS = ["First", 'JMJ', 'Sumesh', 'Anu', 'Rekha'];

var IndexModel = function () {
    this.table_name = "tbl_user";
    this.users = USERS;
};

IndexModel.prototype.getUserById = function (id) {
    var user = 'No record found';
    try {
        if (this.users[id]) {
            user = this.users[id];
        }
    } catch (e) {

    }
    return user;
};

module.exports = IndexModel;