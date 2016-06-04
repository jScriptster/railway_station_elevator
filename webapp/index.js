var express = require('express');
var stationService = require('./model/station-service.js')();

var app = express();

app.get('/api/stationsearch/:query', (req, res) => {
    res.json(stationService.search(req.params.query));
});

app.use('/', express.static('public'));

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    stationService.fetch();
});