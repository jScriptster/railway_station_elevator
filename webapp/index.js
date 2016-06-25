var express = require('express'),
    stationService = require('./model/station-service.js')(),
    elevatorService = require('./model/elevator-service.js')(),
    packageJSON = require('./package.json');

var app = express();

var urlStatic = '/static/v' + packageJSON.version;
var urlApiStationSearch = '/api/station/search/:query';

app.set('views', __dirname + '/view');
app.set('view engine', 'jade');

app.get(urlApiStationSearch, (req, res) => {
    res.json(stationService.search(req.params.query));
});

app.get('/', (req, res) => {
    res.render('index', {
        elevatorStatistics: {
            numberCurrentlyInactive: elevatorService.numberCurrentlyInactive,
            numberCurrentlyActive: elevatorService.numberCurrentlyActive,
            numberCurrentlyUnknown: elevatorService.numberCurrentlyUnknownState,
            percentCurrentlyActive: elevatorService.percentCurrentlyActive,
            percentCurrentlyInactive: elevatorService.percentCurrentlyInactive
        },
        url: {
            elevators: elevatorService.urlElevators,
            stations: elevatorService.urlStations,
            static: urlStatic,
            apiStationSearch: urlApiStationSearch
        }
    });
});


app.use(urlStatic, express.static('public'));

app.listen(3000, () => {
    console.log('listening on port 3000...');
    stationService.fetch(urlStatic);
    elevatorService.fetch();
});