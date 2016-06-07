import React from 'react';

export default class StationSearch extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeTextInput = this.onChangeTextInput.bind(this);
    }

    onChangeTextInput(e) {
        console.log(e.currentTarget.value);
    }


    render() {
        return (
            <div>
                <input onChange={this.onChangeTextInput} />
            </div>
        );
    }
}