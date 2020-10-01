var express = require('express');
var vueStudy = express.Router();
const baseUrl = '/vueStudy'

/* GET users listing. */
vueStudy.get(baseUrl + '/virtualList/:id', function(req, res, next) {
    let arr = new Array(20).fill('')
        .map((_, index) => index + 1)
    res.json(...arr.filter(item => item == req.params.id));
});

module.exports = vueStudy;