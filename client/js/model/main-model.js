import PubSub from 'pubsub-js';
import StationSearchModel from './station-search-model';
import StationSelectionModel from './station-selection-model';

export default class MainModel {
    constructor() {
        this.__submodel = {
            stationSearch: new StationSearchModel(),
            stationSelection: new StationSelectionModel()
        };


        this.__data = {
            appState: 'initial'
        };
    }

    set appState(val) {
        if (this.__data.appState !== val) {
            this.__data.appState = val;
            PubSub.publish(PubSub.customTopics.APP_MAIN_STATE_CHANGED, val);
        }
    }

    get appState() {
        return this.__data.appState;
    }

    get stationSearch() {
        return this.__submodel.stationSearch;
    }

    get stationSelection() {
        return this.__submodel.stationSelection;
    }
}