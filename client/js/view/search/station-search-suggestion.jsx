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

        this.subscribe(this.pubSubTopics.SERACH_CLEAR, (topic, val) => {
            this.setState({suggestion: []});
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
            <ul className={suggestNodes.length===0?'search-suggest search-suggest--empty':'search-suggest'}>
                {suggestNodes}
            </ul>
        );
    }
}