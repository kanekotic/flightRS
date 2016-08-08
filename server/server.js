var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var airlines = require('./api/airlines.js');
var airports = require('./api/airports.js');
var search = require('./api/search.js');


var isDevMode = process.argv.includes('--dev');

if(isDevMode)
    require('./webpack-load')(app);

app.use(express.static('client/views/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/airlines', airlines);
app.use('/airports', airports);
app.use('/search', airports);

app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/../client/views/index.html'));
});

app.listen(3000);