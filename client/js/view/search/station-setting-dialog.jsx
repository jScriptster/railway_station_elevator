import React from 'react';
import StationSearch from './station-search.jsx'
import StationSearchSuggestion from './station-search-suggestion.jsx'
import StationSelection from './station-selection.jsx'

export default class StationSettingDialog extends React.Component {

    onClickStartup() {
        console.log('startup');
    }

    render() {
        return (
            <div>
                <StationSearch />
                <StationSearchSuggestion />
                <StationSelection />
            </div>
        );
    }
}