'use strict';

const express = require('express');
var jwt = require('jsonwebtoken');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

// App
//


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req,res,next) {
  res.send('Hello world\n');
});

app.post('/roles', function(req, res, next) {
    var auth_header = req.header('Authorization');
    var token = auth_header.substring(7);
    var decoded = jwt.decode(token);
    
    if ('roles' in decoded )
    {
    	res.send(decoded.roles);
    }
    else
    {
	res.send('[]');
    }
});

app.post('/username', function(req, res, next) {
    var auth_header = req.header('Authorization');
    var token = auth_header.substring(7);
    var decoded = jwt.decode(token);
    res.send(decoded.upn);
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
