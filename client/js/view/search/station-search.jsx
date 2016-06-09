import React from 'react';

export default class StationSearch extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeTextInput = this.onChangeTextInput.bind(this);
    }

    onChangeTextInput(e) {
        this.props.model.stationSearch.search(e.currentTarget.value);
    }


    render() {
        return (
            <div>
                <input onChange={this.onChangeTextInput} />
            </div>
        );
    }
}