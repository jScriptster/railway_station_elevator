"use strict";
const DATA_ENDPOINT = "/stations.csv";

var headers = new Array(13).fill('unused');
headers[0] = 'land';
headers[2] = 'id';
headers[3] = 'stationname';
headers[8] = 'city';

var CSVConverter = require("csvtojson").Converter;
var csvConverter = new CSVConverter({
    constructResult: false,
    delimiter: ';',
    flatKeys: true,
    headers: headers
});


csvConverter.transform = function(json,row,index){
     delete json["unused"];
};

var singletonServiceInstance = {

    data: [],

    fetch (pathStatic) {
        var newData = [];

        //record_parsed will be emitted each csv row being processed
        csvConverter.on("record_parsed", (jsonObj) => {
            newData.push(jsonObj);
        });

        csvConverter.on("end_parsed", (jsonObj) => {
            this.data = newData;
        });

        require("request").get('http://127.0.0.1:3000' + pathStatic + DATA_ENDPOINT).pipe(csvConverter);
    },

    search (query) {
        var result = {
            q: query.trim(),
            payload: {
                entries: []
            }
        };

        var queryArr = result.q.split(' ');

        result.payload.entries = this.data.filter((elem, index, arr) => {
            var hitCount = 0,
                queryPart;
            if (queryArr.length === 1) {
                queryPart = queryArr[0];
                if (queryPart.length < 6) {
                    hitCount += (elem.stationname.toLowerCase().indexOf(queryPart) === 0
                        || elem.city.toLowerCase().indexOf(queryPart) === 0) ? 1 : 0;
                } else {
                    hitCount += (elem.stationname.toLowerCase().indexOf(queryPart) > -1
                        || elem.city.toLowerCase().indexOf(queryPart) > -1) ? 1 : 0;
                }

            } else {
                for (let i = 0, len = queryArr.length; i < len; i++) {
                    queryPart = queryArr[i];
                    if (queryPart.length < 2) {
                        hitCount += (elem.stationname.toLowerCase().indexOf(queryPart) === 0
                            || elem.city.toLowerCase().indexOf(queryPart) === 0) ? 1 : 0;
                    } else {
                        hitCount += (elem.stationname.toLowerCase().indexOf(queryPart) > -1
                            || elem.city.toLowerCase().indexOf(queryPart) > -1) ? 1 : 0;
                    }
                }
            }

            return hitCount === queryArr.length;
        });

        return result;
    }
};

module.exports = function () {
    return singletonServiceInstance;
};