import React from 'react';
import PubSub from 'pubsub-js';

export default class StationSelection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            stations: this.props.model.stationSelection.selection
        };

        PubSub.subscribe(PubSub.customTopics.STATION_SELECTION_CHANGED, (topic, value) => {
            this.setState({stations: value});
        });
    }

    render() {
        var selectionNodes = this.state.stations.map((station) => {
            return (
                <span>{station.city}</span>
            );
        });
        return (
            <div>
            {selectionNodes}
            </div>
        );
    }
}