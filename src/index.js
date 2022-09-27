import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import {BrowserRouter as Router} from "react-router-dom";
import "./css/index.css";

const root = ReactDOMClient.createRoot(
    document.getElementById('root')
);

const store = createStore(reducer, middleware);

root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);