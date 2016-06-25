import React from 'react';
import StageStationItem from './stage-station-item.jsx'

export default class Stage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stations: this.props.model.stationSelection.selection
        };

        this.onClickSettings = this.onClickSettings.bind(this);
    }

    onClickSettings(e) {
        this.props.model.appState  = 'settings';
    }

    render() {

        var selectionNodes = this.state.stations.map((station, index) => {
            return (
                <StageStationItem model={this.props.model} stationData={station} key={index} />
            );
        });

        return (
            <div className="stage">
                {selectionNodes}
                <button onClick={this.onClickSettings}><span className="stage__edit-btn icon-equalizer2"></span></button>
            </div>
        );
    }
}