import React from 'react';
import loadable from 'react-loadable';
const loading = function() {
    return (<div>加载中</div>);
}
const LoadableComponent = loadable({
    loader:()=>(import('./index.js')),
    loading
});
export default function(){
    return (<LoadableComponent/>);
}