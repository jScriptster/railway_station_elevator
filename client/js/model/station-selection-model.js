import PubSub from 'pubsub-js';

export default class StationSearchModel {
    constructor() {
        this.__data = {
            selection: []
        };
    }

    addStation(stationData) {
        this.selection.push(stationData);
        PubSub.publish(PubSub.customTopics.STATION_SELECTION_CHANGED, this.selection);
    }

    get selection() {
        return this.__data.selection;
    }
}