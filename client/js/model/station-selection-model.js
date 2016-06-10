import PubSub from 'pubsub-js';
import ElevatorsModel from './elevators-model.js';

export default class StationSearchModel {
    constructor() {
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

        PubSub.publish(PubSub.customTopics.STATION_SELECTION_CHANGED, this.selection);
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