var express = require('express');
var test = express.Router();
const baseUrl = '/test'

/* GET users listing. */
test.get(baseUrl + '/test', function(req, res, next) {
    res.send('test');
});

module.exports = test;