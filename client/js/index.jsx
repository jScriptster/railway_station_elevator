import React from 'react';
import ReactDOM from 'react-dom';

require("./../less/index.less");

export class App extends React.Component {

    onClickStartup() {
        console.log('startup');
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickStartup}>Eigene Route checken!!!</button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#app"));