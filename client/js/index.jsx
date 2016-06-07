import React from 'react';
import ReactDOM from 'react-dom';
import MainModel from './model/main'
import StationSettingsDialog from './view/search/station-setting-dialog.jsx';

require("./../less/index.less");

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            main: 'initial'
        };

        this.onClickStartup = this.onClickStartup.bind(this);
    }

    onClickStartup() {
        this.setState({main: 'stationSetting'});
    }

    render() {
        if (this.state.main === 'initial') {
            return (
                <div>
                    <button onClick={this.onClickStartup}>Eigene Route checken</button>
                </div>
            );
        } else {
            return (
                <div>
                    <StationSettingsDialog />
                </div>
            );
        }
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));

new MainModel();