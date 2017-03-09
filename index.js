var express = require('express');
var useragent = require('express-useragent');

var app = express();
var port = process.env.port || 8080;

app.use(useragent.express());

app.get('/', function(req, res) {
    res.send('<a href="https://cmseaton-header-parser.herokuapp.com/api/whoami">API</a>');
});

app.get('/api/whoami', function (req, res) {

    var obj = {};

    obj.ipaddress = req.ip;
    obj.language = req.headers["accept-language"].split(',')[0];
    obj.software = req.useragent.platform + ': ' + req.useragent.os;

    res.json(obj);

});

app.listen(port, function() {
    console.log("Listening on Port: " + port);
})