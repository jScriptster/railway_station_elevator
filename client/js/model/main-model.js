import PubSub from 'pubsub-js';
import * as pubSubTopics from '../pub-sub-topics.js';
import StationSearchModel from './station-search-model';

export default class MainModel {
    constructor() {
        this._stationSearch = new StationSearchModel();


        this.__data = {
            appState: 'initial'
        };
    }

    set appState(val) {
        if (this.__data.appState !== val) {
            this.__data.appState = val;
            PubSub.publish(pubSubTopics.APP_MAIN_STATE_CHANGED, val);
        }
    }

    get appState() {
        return this.__data.appState;
    }
}