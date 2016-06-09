"use strict";

const HOST = 'adam.noncd.db.de';
const PATH_BASE = '/api/v1.0';
const PATH_FACILITIES = '/facilities';
const PATH_STATIONS = '/stations';

var fetchOptions = {
    host: HOST,
    path: PATH_BASE + PATH_FACILITIES,
    headers: {
        "user-agent": "jScriptster/railway_station_elevator Node.js", // strangely, the api requires a user agent
        "accept": "application/json" // accept header is required
    }
};

var https = require('https');

var singletonServiceInstance = {

    facilitiesFull: [],

    currentlyActive: 0,
    currentlyInactive: 0,

    fetch () {
        return https.get(fetchOptions, (response) => {
            // Continuously update stream with data
            var body = '';
            response.on('data', (d) => {
                body += d;
            });
            response.on('end', () => {
                // Data reception is done, do whatever with it!
                this.currentlyActive = 0;
                this.currentlyInactive = 0;
                try {
                    this.facilitiesFull = JSON.parse(body);
                    for (let i = 0, len = this.facilitiesFull.length; i < len; i++) {
                        if (this.facilitiesFull[i].state === 'ACTIVE') {
                            this.currentlyActive++;
                        } else if (this.facilitiesFull[i].state === 'INACTIVE') {
                            this.currentlyInactive++;
                        }
                    }
                } catch (err) {
                    // TODO
                }
            });
        });
    },

    get numberCurrentlyInactive () {
        return this.currentlyInactive;
    },

    get numberCurrentlyActive () {
        return this.currentlyActive;
    },

    get urlElevators () {
        return 'https://' + HOST + PATH_BASE + PATH_FACILITIES;
    },

    get urlStations () {
        return 'https://' + HOST + PATH_BASE + PATH_STATIONS;
    }
};



module.exports = function () {
    return singletonServiceInstance;
};