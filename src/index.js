import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import {Provider} from 'react-redux';
import App from './components/App';
import './style';
import CssBaseline from "@material-ui/core/CssBaseline";


ReactDOM.render(
    <Provider store={store}>
        <CssBaseline />
        <App/>
    </Provider>, document.getElementById('root'));