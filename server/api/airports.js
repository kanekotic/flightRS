var express = require('express');
var router = express.Router();
var http = require('http');

router.post('/', function(req, res) {
    var options = {
        host: 'node.locomote.com',
        path: '/code-task/airports?q='+req.body.place
    };
    callback = (response) => {
    var str = '';
    response.on('data', (chunk) => {
        str += chunk;
    });
    response.on('end',  () => {
        res.send(str);
    });
    }
    http.request(options, callback).end();
});

module.exports = router;