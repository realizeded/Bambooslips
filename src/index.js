import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Style from './style';
import Font from './common/font/iconfont';
import {Provider} from 'react-redux';
import store from './store/index';

ReactDOM.render(
    <React.Fragment>
        <Style/>
        <Font/>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.Fragment>
    ,document.getElementById('root'));