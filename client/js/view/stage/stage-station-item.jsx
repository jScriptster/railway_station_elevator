import React from 'react';
import ReactComponentPubSub from '../react-component-pub-sub.jsx';
import StageStationItemDetails from './stage-station-item-details.jsx';

export default class StageStationItem extends ReactComponentPubSub {

    constructor(props) {
        super(props);

        this.state = {
            isFetched: this.props.stationData.elevators.isFetched,
            detailsVisible: false
        };

        this.onClickItem = this.onClickItem.bind(this);

        this.props.stationData.elevators.fetch();

        this.subscribe(this.pubSubTopics.ELEVATORS_FETCHED, (topic, value) => {
            if (value === this.props.stationData.stationId) {
                console.log('OK');
                this.setState({
                    isFetched: this.props.stationData.elevators.isFetched
                });
            }
        });
    }

    onClickItem(e) {
        if (this.props.stationData.elevators.isFetched) {
            this.setState({
                detailsVisible: !this.state.detailsVisible
            });
        }
    }

    render() {
        var detailsElement;

        if (this.state.detailsVisible) {
            detailsElement =
                (<StageStationItemDetails model={this.props.model} stationData={this.props.stationData} />);
        }

        return (
            <div onClick={this.onClickItem}>
                <strong>{this.props.stationData.name} </strong>
                <span>{this.state.isFetched?'OK':'LOADING'} </span>
                {detailsElement}
            </div>
        );
    }
}