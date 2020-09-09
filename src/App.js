import React from 'react';

import Header from './components/Header/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/Home/index';
import Detail from './pages/Detail/index';
function App(props) {
    return (<div>
        <BrowserRouter>
            <Header/>
            <Route path="/" exact component={Home}/>
            <Route path="/detail" exact component={Detail}/>
        </BrowserRouter>
    </div>);
}
export default App;