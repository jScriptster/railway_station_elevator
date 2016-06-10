import PubSub from 'pubsub-js';

export default class StationSearchModel {
    constructor() {
        this._currentQuery = '';
    }

    search(query) {
        if (query.length === 0) {
            return;
        }
        
        this._currentQuery = query;
        window.fetch(window.jScriptster.railway.url.apiStationSearch.replace(':query', query))
            .then((response) => {
                return response.json()
            }).then((json) => {
                if (json.q === this._currentQuery) {
                    PubSub.publish(PubSub.customTopics.SERACH_RESULT, json.payload);
                }
            }).catch((ex) => {
                console.log('parsing failed', ex)
            });
    }
}