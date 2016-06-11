import Publisher from './publisher.js';
import StationSearchModel from './station-search-model';
import StationSelectionModel from './station-selection-model';

export default class MainModel extends Publisher {
    constructor() {
        super();
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
            this.publish(this.pubSubTopics.APP_MAIN_STATE_CHANGED, val);
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