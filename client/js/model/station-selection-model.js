import Publisher from './publisher.js';
import ElevatorsModel from './elevators-model.js';

export default class StationSearchModel extends Publisher {
    constructor() {
        super();
        this.__data = {
            selection: []
        };
    }

    addStation(stationData) {
        this.__data.selection.push({
            city: stationData.city,
            name: stationData.stationname,
            stationId: stationData.id,
            elevators: new ElevatorsModel(stationData.id)
        });

        this.publish(this.pubSubTopics.STATION_SELECTION_CHANGED, this.selection);
    }

    removeStation(index) {
        if (index < this.__data.selection.length) {
            this.__data.selection.splice(index, 1);
            this.publish(this.pubSubTopics.STATION_SELECTION_CHANGED, this.selection);
        }
    }

    fetchElevators() {
        for (let i = 0, len = this.__data.selection.length; i < len; i++) {
            this.__data.selection[i].elevators.fetch();
        }
    }

    get selection() {
        return this.__data.selection.slice(); // new array instance !!!
    }
}