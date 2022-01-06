import React from 'react';
import {stateType} from "./Redux/redux-store";
import './index.css';
import reportWebVitals from "./reportWebVitals";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StoreType} from "./Redux/State";
import store from './Redux/State'

const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App stateApp={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 // updateNewPostText={store.getState}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store);
store.subscriber(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



