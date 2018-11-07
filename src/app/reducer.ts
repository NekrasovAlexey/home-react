import {ExampleReducers, IExampleState} from "app/Modules/Example/ExampleReducers";
import {combineReducers} from 'redux';

interface RootState {
    example: IExampleState;
}

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
const rootReducer = combineReducers<RootState>({
    example: ExampleReducers as any,
});

export {RootState, rootReducer};
