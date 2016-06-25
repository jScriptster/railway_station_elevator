import React from 'react';
import ReactDOM from 'react-dom';
import PubSub from 'pubsub-js';
import * as pubSubTopics from './pub-sub-topics.js';
import ReactComponentPubSub from './view/react-component-pub-sub.jsx';
import MainModel from './model/main-model'
import StationSettingsDialog from './view/search/station-setting-dialog.jsx';
import Stage from './view/stage/stage.jsx';

require("./../less/index.less");

export class App extends ReactComponentPubSub {

    constructor(props) {
        super(props);

        this.state = {
            main: props.model.appState
        };

        this.onClickStartup = this.onClickStartup.bind(this);

        this.subscribe(pubSubTopics.APP_MAIN_STATE_CHANGED, (topic, value) => {
            this.setState({main: value});
        });
    }

    onClickStartup() {
        var splashscreen = document.getElementById('splashscreen');
        splashscreen.parentNode.removeChild(splashscreen);

        this.props.model.appState = 'settings';
    }


    render() {
        if (this.state.main === 'initial') {
            return (
                <div>
                    <button onClick={this.onClickStartup}><span className="icon-location"></span>Eigene Route checken</button>
                </div>
            );
        } else if (this.state.main === 'stage') {
            return (
                <div>
                    <Stage model={this.props.model} />
                </div>
            );
        } else {
            return (
                <div>
                    <StationSettingsDialog model={this.props.model} />
                </div>
            );
        }
    }
}

(function() {
    PubSub.customTopics = pubSubTopics;
    var mainModel = new MainModel();
    ReactDOM.render(<App model={mainModel} />, document.querySelector("#app"));
}());