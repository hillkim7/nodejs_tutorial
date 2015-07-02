// HTTPS client/server program sample

var https = require('https');
var fs = require('fs');

var options = {
    host: 'localhost',
    port: 5678,
    method: 'GET',
    path: '/',
    headers: {},
    agent: false,
    key: fs.readFileSync('client2.key'),
    cert: fs.readFileSync('client2.pem'),
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var req = https.request(options, function(res) {
    console.log("statusCode:", res.statusCode);
    res.on('data', function(d) {
      console.log('data:', d.toString());
    });
});

req.on("error", function (err) {
    console.log('error: ' + err);
});

req.end();
