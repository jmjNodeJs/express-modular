/**
 * Created by joseph on 9/8/16.
 */
module.exports = (function (env) {
    var config = {};
    switch (env) {
        case 'production':
            config = require('../env/production');
            break;
        case 'development':
            config = require('../env/development');
            break;
        case 'testing':
            config = require('../env/testing');
            break;
        case 'staging':
            config = require('../env/staging');
            break;
        default:
            console.error('NODE_ENV environment variable not set');
            process.exit(1);
    }
    return config;
})(process.env.NODE_ENV);