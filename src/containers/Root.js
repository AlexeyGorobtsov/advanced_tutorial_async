import React from 'react';
import configureStore from "../configureStore";
import { Provider } from 'react-redux';
import AsyncApp from "./AsyncApp";

const store = configureStore();

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AsyncApp />
            </Provider>
        );
    }
}
