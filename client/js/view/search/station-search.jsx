import React from 'react';

export default class StationSearch extends React.Component {

    constructor(props) {
        super(props);

        this.onChangeTextInput = this.onChangeTextInput.bind(this);
        this.onClickClear = this.onClickClear.bind(this);
        this.onFocusTextInput = this.onFocusTextInput.bind(this);
    }

    onChangeTextInput(e) {
        this.props.model.stationSearch.search(e.currentTarget.value);
    }

    onClickClear(e) {
        this.refs.searchInput.value = '';
        this.props.model.stationSearch.clear();
    }

    onFocusTextInput(e) {
        if (e.currentTarget.value.length > 0) {
            this.onChangeTextInput(e);
        }
    }

    render() {
        return (
            <div className="search-dialog__input-box">
                <input
                    ref="searchInput"
                    className="search-dialog__input"
                    placeholder="Bahnhof hinzufügen..."
                    onChange={this.onChangeTextInput}
                    onFocus={this.onFocusTextInput}/>

                <button className="search-dialog__clear-input" onClick={this.onClickClear}><span className="icon-cross"></span></button>
            </div>
        );
    }
}