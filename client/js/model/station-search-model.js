import Publisher from './publisher.js';

export default class StationSearchModel extends Publisher {
    constructor() {
        super();
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
                    this.publish(this.pubSubTopics.SERACH_RESULT, json.payload);
                }
            }).catch((ex) => {
                console.log('parsing failed', ex)
            });
    }
}