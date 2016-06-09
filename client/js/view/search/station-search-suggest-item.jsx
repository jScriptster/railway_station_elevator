import React from 'react';
import PubSub from 'pubsub-js';

export default class StationSearchSuggestItem extends React.Component {

    constructor(props) {
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(e) {
        this.props.model.stationSelection.addStation(this.props.stationData);
    }

    render() {
        return (
            <div onClick={this.onClickItem}>
                <span>{this.props.stationData.id} </span>
                <span>{this.props.stationData.stationname} </span>
                <span>{this.props.stationData.city} </span>
                <span>{this.props.stationData.land} </span>
            </div>
        );
    }
}