/**
 * Created by joseph on 12/8/16.
 */
var express = require('express');
var LoggerMiddleware = function (req, res, next) {
    console.log('LoggerMiddleware executing....');
    next();
};

module.exports = LoggerMiddleware;
