// TLS client/server socket communication samples

var tls = require('tls');
var fs = require('fs');
var port = 4001;
var host = '0.0.0.0';

// Required to avoid 'Error: DEPTH_ZERO_SELF_SIGNED_CERT'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var options = {
  key: fs.readFileSync('client_key.pem'),
  cert: fs.readFileSync('client_cert.pem')
};

process.stdin.resume();

var client = tls.connect(port, host, options, function() {
  console.log('connected');
  process.stdin.pipe(client, { end: false });
  client.pipe(process.stdout);
});

