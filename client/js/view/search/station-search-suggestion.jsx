import React from 'react';
import PubSub from 'pubsub-js';
import StationSearchSuggestItem from './station-search-suggest-item.jsx';

export default class StationSearchSuggestion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestion: []
        };

        PubSub.subscribe(PubSub.customTopics.SERACH_RESULT, (topic, val) => {
            this.setState({suggestion: val.entries});
        });
    }

    render() {
        var suggestNodes = this.state.suggestion.map((suggest) => {
            return (
                <StationSearchSuggestItem
                    stationData={suggest}
                    model={this.props.model}
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