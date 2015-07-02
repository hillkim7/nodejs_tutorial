// TLS client/server socket communication samples

var tls = require('tls');
var fs = require('fs');
var port = 4001;

var clients = [];

var options = {
  key: fs.readFileSync('server_key.pem'),
  cert: fs.readFileSync('server_cert.pem'),
  ca: [fs.readFileSync('fake_ca.pem')],
  requestCert: true,
  rejectUnauthorized: false
};

function distribute(from, data) {
  var socket = from.socket;
  console.log('data ', data.toString(), 'from ' + socket.remoteAddress + ':' + socket.remotePort );
  clients.forEach(function(client) {
  //if (client != from) {
      client.write(socket.remoteAddress + ':' + socket.remotePort + ' said: ' + data);
  //}
  });
}

var server = tls.createServer(options, function(client) {
  console.log('connection established:', client.address());
  console.log('client authorized:', client.authorized);
  clients.push(client);
  client.on('data', function(data) {
    distribute(client, data);
  });

  client.on('close', function() {
    console.log('connection closed');
    clients.splice(clients.indexOf(client), 1);
  });
});

server.listen(port, function() {
  console.log('listening:', server.address());
});
