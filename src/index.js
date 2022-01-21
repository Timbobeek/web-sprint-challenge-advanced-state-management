import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import "./index.css";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk, logger));

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

//Task List:
//done//1. Add in all necessary components and libary methods.
//done//2. Create a store that includes thunk and logger middleware support.
//done//3. Wrap the App component in a react-redux Provider element.