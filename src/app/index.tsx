import {Layout} from "app/Modules/Layout/Layout";
import * as React from 'react';
import {hot} from 'react-hot-loader';

require('./app.css');

class App extends React.Component<any, {}> {
    render () {
        return (
            <Layout/>
        );
    }
}

const hotApp = hot(module)(App);

export {hotApp as App};
