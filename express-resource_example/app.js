var http = require('http');
var express = require('express');
var resource = require('express-resource');
var app = express();

app.resource('users', require('./users.js'));
http.createServer(app).listen(3000, function() {
  console.log('App started');
});

