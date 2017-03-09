var express = require('express');
var useragent = require('express-useragent');
require('dotenv').config();

var app = express();
var port = process.env.PORT;
var link = process.env.LINK;

app.use(useragent.express());

app.get('/', function(req, res) {
    res.send('<a href="' + link + '/api/whoami">API</a>');
});

app.get('/api/whoami', function (req, res) {

    var obj = {};

    obj.ipaddress = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    obj.language = req.headers["accept-language"].split(',')[0];
    obj.software = req.useragent.platform + ': ' + req.useragent.os;

    res.json(obj);

});

app.listen(port, function() {
    console.log("Listening on Port: " + port);
})