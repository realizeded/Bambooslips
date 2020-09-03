import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Style from './style';
import Font from './common/font/iconfont';
ReactDOM.render(
    <React.Fragment>
        <Style/>
        <Font/>
        <App/>
    </React.Fragment>
    ,document.getElementById('root'));