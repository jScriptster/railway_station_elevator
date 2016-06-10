import React from 'react';
import PubSub from 'pubsub-js';

export default class StageStationItemDetails extends React.Component {

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