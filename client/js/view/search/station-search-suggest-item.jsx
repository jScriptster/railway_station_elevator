import React from 'react';
import ReactComponentPubSub from '../react-component-pub-sub.jsx';

export default class StationSearchSuggestItem extends ReactComponentPubSub {

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