const express = require('express');

var app = express();
var path = require('path');

const PUBLIC_PATH = path.join(__dirname, 'public')

app.use('/', express.static(PUBLIC_PATH));

console.log('serving port 3000');

app.listen(3000);