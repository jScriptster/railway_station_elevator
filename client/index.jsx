import React from 'react';
import ReactDOM from 'react-dom';

require("./less/index.less");

export class App extends React.Component {
    render() {
        return (
            <div>Simple React + Babel + Bootstrap + Webpack</div>
    );
    }
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));