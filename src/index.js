import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './router/Routes';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const mountNode = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    mountNode

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();