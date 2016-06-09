import PubSub from 'pubsub-js';

export default class StationSearchModel {
    constructor() {
        this._currentQuery = '';
    }

    search(query) {
        this._currentQuery = query;
        window.fetch('/api/station/search/:query'.replace(':query', query))
            .then((response) => {
                return response.json()
            }).then((json) => {
                if (json.q === this._currentQuery) {
                    PubSub.publish(PubSub.customTopics.SERACH_RESULT, json.payload);
                }
            }).catch((ex) => {
                console.log('parsing failed', ex)
            })
    }
}