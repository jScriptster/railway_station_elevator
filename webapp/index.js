var express = require('express'),
    stationService = require('./model/station-service.js')(),
    elevatorService = require('./model/elevator-service.js')();

var app = express();

app.set('views', __dirname + '/view');
app.set('view engine', 'jade');

app.get('/api/station/search/:query', (req, res) => {
    res.json(stationService.search(req.params.query));
});

app.get('/api/elevator/search-by-station/:id', (req, res) => {
    res.json(elevatorService.searchByStationId(req.params.id));
});

app.get('/', (req, res) => {
    res.render('index');
});

app.use('/static', express.static('public'));

app.listen(3000, () => {
    console.log('listening on port 3000...');
    stationService.fetch();
});