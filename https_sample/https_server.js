// HTTPS client/server program sample

var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('server1.key'),
    cert: fs.readFileSync('server1.pem'),
    ca: [fs.readFileSync('fake_ca.pem')],
    requestCert: true,
    rejectUnauthorized: false,
};

var server = https.createServer(options, function (req, res) {
    if (req.client.authorized) {
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end('{"status":"approved"}');
        console.log("Approved Client ", req.client.socket.remoteAddress);
    } else {
        console.log("res.connection.authroizationError:  " + res.connection.authorizationError);
        res.writeHead(403, {"Content-Type":"application/json"});
        res.end('{"status":"denied"}');
        console.log("Denied Client " , req.client.socket.remoteAddress);
    }
});

server.on('error', function(err) {
    console.log("server.error: "  + err);
});

server.on("listening", function () {
    console.log("Server listening");
});

server.listen(5678);

