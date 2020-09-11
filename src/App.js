import React from 'react';

import Header from './components/Header/Header';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/Home/index';
import Detail from './pages/Detail/loadable';
import Login from './pages/Login/index';
import Write from './pages/Write/index';
function App(props) {
    return (<div>
        <BrowserRouter>
            <Header/>
            <Route path="/" exact component={Home}/>
            <Route path="/detail/:id" exact component={Detail}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/write" component={Write}/>
        </BrowserRouter>
    </div>);
}
export default App;