import React from 'react';
import ReactComponentPubSub from '../react-component-pub-sub.jsx';

export default class StageStationItemDetails extends ReactComponentPubSub {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                DETAILS:
                <strong> {this.props.stationData.name} </strong>
                <p>
                    <strong>Anzahl: </strong><span>{this.props.stationData.elevators.countAll} </span>
                    <strong>Aktiv: </strong><span>{this.props.stationData.elevators.countStateActive} </span>
                    <strong>Defekt: </strong><span>{this.props.stationData.elevators.countStateInactive} </span>
                    <strong>Unbekannt: </strong><span>{this.props.stationData.elevators.countStateUnknown} </span>
                </p>
            </div>
        );
    }
}