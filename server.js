'use strict';

const express = require('express');
var jwt = require('jsonwebtoken');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

// App
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.post('/token', function(req, res) {
    var auth_header = req.header('Authorization');
    var token = auth_header.substring(7);
    var decoded = jwt.decode(token);
    res.send(decoded.roles);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
