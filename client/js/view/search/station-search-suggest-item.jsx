import React from 'react';
import ReactComponentPubSub from '../react-component-pub-sub.jsx';

export default class StationSearchSuggestItem extends ReactComponentPubSub {

    constructor(props) {
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(e) {
        this.props.model.stationSearch.clear();
        this.props.model.stationSelection.addStation(this.props.stationData);
    }

    render() {
        return (
            <li className="search-suggest__item" onClick={this.onClickItem}>
                <span className="search-suggest__stationname">{this.props.stationData.stationname} </span>
                <span className="search-suggest__city label--size-s">{this.props.stationData.city}, </span>
                <span className="search-suggest__land label--size-s">{this.props.stationData.land} </span>
            </li>
        );
    }
}