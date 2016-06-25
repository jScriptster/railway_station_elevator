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
            <div className="search-dialog">
                <StationSelection model={this.props.model} />
                <StationSearch model={this.props.model} />
                <StationSearchSuggestion model={this.props.model} />
                <div className="search-dialog__submit-layer">
                    <div className="search-dialog__submit-layer-inner">
                        <button className="search-dialog__submit-btn" onClick={this.onClickSubmit}><span className="icon-checkmark"></span>Fertig</button>
                    </div>
                </div>

            </div>
        );
    }
}