import PubSub from 'pubsub-js';

export default class ElevatorsModel {
    constructor(stationId) {
        this.__data = {
            facilities: [],
            countStateActive: 0,
            countStateInactive: 0,
            countStateUnknown: 0
        };

        this._stationId = stationId;
        this._isFetched = false;
    }

    fetch() {
        window.fetch(window.jScriptster.railway.url.stations.replace(':stationId', this._stationId))
            .then((response) => {
                return response.json()
            }).then((json) => {
                this.__data.facilities = json.facilities;
                this._isFetched = true;
                this.__data.countStateActive = 0;
                this.__data.countStateInactive = 0;
                this.__data.countStateUnknown = 0;
                for (let i = 0, len = json.facilities.length; i < len; i++) {
                    switch (json.facilities[i].state) {
                    case 'ACTIVE':
                        this.__data.countStateActive++;
                        break;
                    case 'INACTIVE':
                        this.__data.countStateInactive++;
                        break;
                    default :
                        this.__data.countStateUnknown++;
                        break;
                    }
                }
                PubSub.publish(PubSub.customTopics.ELEVATORS_FETCHED, json.facilities);
            }).catch((ex) => {
                console.log('parsing failed', ex)
            });
    }

    get facilities() {
        return this.__data.facilities;
    }

    get isFetched() {
        return this._isFetched;
    }

    get countAll() {
        return this.__data.facilities.length;
    }

    get countStateActive() {
        return this.__data.countStateActive;
    }

    get countStateInactive() {
        return this.__data.countStateInactive;
    }

    get countStateUnknown() {
        return this.__data.countStateUnknown;
    }
}