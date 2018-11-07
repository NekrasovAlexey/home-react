import {RootState} from "app/reducer";
import * as React from 'react';
import {connect} from "react-redux";

require('./Example.css');

interface IStateProps {
    text: string;
}

class Example extends React.Component<IStateProps, {}> {
    public render() {
        return (
            <div>
                {this.props.text}
            </div>
        );
    }
}

const connected = connect(
    (state: RootState): IStateProps => ({
        text: state.example.text
    }),
)(Example);

export {connected as Example};
