import {handleActions} from "redux-actions";

export interface IExampleState {
    text: string
}

const initialState: IExampleState = {
    text: 'Hi Ang!'
};

export const ExampleReducers = handleActions({

}, initialState);