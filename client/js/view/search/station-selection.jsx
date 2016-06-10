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
        console.log('remove');
    }

    render() {
        var selectionNodes = this.state.stations.map((station) => {
            return (
                <div>
                    <strong>{station.name}</strong>
                    <button onClick={this.onClickRemove}>Entfernen</button>
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