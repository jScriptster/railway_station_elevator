import React from 'react';
import ReactComponentPubSub from '../react-component-pub-sub.jsx';
import StationSearchSuggestItem from './station-search-suggest-item.jsx';

export default class StationSearchSuggestion extends ReactComponentPubSub {

    constructor(props) {
        super(props);

        this.state = {
            suggestion: []
        };

        this.subscribe(this.pubSubTopics.SERACH_RESULT, (topic, val) => {
            this.setState({suggestion: val.entries});
        });
    }

    render() {
        var suggestNodes = this.state.suggestion.map((suggest, index) => {
            return (
                <StationSearchSuggestItem
                    stationData={suggest}
                    model={this.props.model}
                    key={index}
                />
            );
        });
        return (
            <div>
                {suggestNodes}
            </div>
        );
    }
}