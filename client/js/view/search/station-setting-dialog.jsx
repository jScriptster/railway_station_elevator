import React from 'react';
import StationSearch from './station-search.jsx';
import StationSearchSuggestion from './station-search-suggestion.jsx';
import StationSelection from './station-selection.jsx';

export default class StationSettingDialog extends React.Component {

    constructor(props) {
        super(props);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    onClickSubmit(e) {
        this.props.model.appState = 'stage';
    }

    render() {
        return (
            <div>
                <StationSearch model={this.props.model} />
                <StationSearchSuggestion model={this.props.model} />
                <StationSelection model={this.props.model} />
                <button onClick={this.onClickSubmit}>Fertig!</button>
            </div>
        );
    }
}