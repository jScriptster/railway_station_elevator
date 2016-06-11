import React from 'react';
import ReactComponentPubSub from '../react-component-pub-sub.jsx';

export default class StationSelection extends ReactComponentPubSub {

    constructor(props) {
        super(props);

        this.state = {
            stations: this.props.model.stationSelection.selection
        };

        this.subscribe(this.pubSubTopics.STATION_SELECTION_CHANGED, (topic, value) => {
            this.setState({stations: value});
        });

        this.onClickRemove = this.onClickRemove.bind(this);
    }

    onClickRemove(e) {
        this.props.model.stationSelection.removeStation(e.currentTarget.dataset.index);
    }

    render() {
        var selectionNodes = this.state.stations.map((station, index) => {
            return (
                <div key={index}>
                    <strong>{station.name}</strong>
                    <button onClick={this.onClickRemove} data-index={index}>Entfernen</button>
                </div>
            );
        });
        return (
            <div>
            {selectionNodes}
            </div>
        );
    }
}