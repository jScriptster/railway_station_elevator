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
                <li key={index} className="station-selection__item">
                    <span className="station-selection__icon icon-location"></span>
                    <strong className="station-selection__name">{station.name}</strong>
                    <span className="station-selection__city">{station.city}</span>
                    <button className="station-selection__remove-btn" onClick={this.onClickRemove} data-index={index}><span className="icon-cross"></span></button>
                </li>
            );
        });
        return (
            <div className="station-selection">
                <ul>
                    {selectionNodes}
                </ul>
            </div>
        );
    }
}