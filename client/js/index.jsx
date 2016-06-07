import React from 'react';
import ReactDOM from 'react-dom';
import PubSub from 'pubsub-js';
import * as pubSubTopics from './pub-sub-topics.js';
import MainModel from './model/main-model'
import StationSettingsDialog from './view/search/station-setting-dialog.jsx';


require("./../less/index.less");

export class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            main: props.model.appState
        };

        this.onClickStartup = this.onClickStartup.bind(this);

        PubSub.subscribe(pubSubTopics.APP_MAIN_STATE_CHANGED, (topic, value) => {
            this.setState({main: value});
        });
    }

    onClickStartup() {
        this.props.model.appState = 'stationSetting';
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

(function() {
    var mainModel = new MainModel();
    ReactDOM.render(<App model={mainModel}/>, document.querySelector("#app"));
}());