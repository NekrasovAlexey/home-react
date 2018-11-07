import {RootState} from "app/reducer";
import * as React from 'react';
import {connect} from "react-redux";
import {hot} from 'react-hot-loader';

require('./app.css');

interface IStateProps {
    text: string;
}

class App extends React.Component<IStateProps, {}> {
    render () {
        return (
            <div className="app-wrapper">
                {this.props.text}
            </div>
        );
    }
}

const hotApp = hot(module)(App);

const connected = connect(
    (state: RootState): IStateProps => ({
        text: state.example.text
    })
)(hotApp);

export {connected as App};
