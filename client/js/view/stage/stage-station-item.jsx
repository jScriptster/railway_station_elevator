import React from 'react';
import PubSub from 'pubsub-js';

export default class StageStationItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isFetched: this.props.stationData.elevators.isFetched
        };

        this.props.stationData.elevators.fetch();

        PubSub.subscribe(PubSub.customTopics.ELEVATORS_FETCHED, (topic, value) => {
            this.setState({
                isFetched: this.props.stationData.elevators.isFetched
            });
        });
    }



    render() {
        return (
            <div>
                <strong>{this.props.stationData.name} </strong>
                <span>{this.state.isFetched?'OK':'LOADING'} </span>
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