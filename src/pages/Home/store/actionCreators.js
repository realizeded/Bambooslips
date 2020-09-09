import {CHANGE_HOME_DATA,APPEND_MORE_LIST} from './actionTypes';
const getChangeHomeDataAction = function(result) {
    return {
        type:CHANGE_HOME_DATA,
        data:result
    };
}
const getAppendMoreListAction = function(result) {
    return {
        type:APPEND_MORE_LIST,
        data:result
    }
};
const getAjaxChangeHomeDataAction = function() {
    return dispatch=>{
        new Promise(function(resolve,reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('get','http://localhost:3000/api/home/home.json',true);
            xhr.send(null);
            xhr.onreadystatechange = function() {
                if(xhr.readyState===4) {
                    if(xhr.status===200) {
                        let data = JSON.parse(xhr.responseText);
                        if(data.code===200) {
                            resolve(data.data);
                        }
                    }
                }
            }
        }).then(result=>{
            const action = getChangeHomeDataAction(result);
            dispatch(action);
        });
    };
};
const getAjaxAppendMoreList = function() {
    return dispatch=>{
        new Promise(function(resolve,reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('get','http://localhost:3000/api/home/moreList.json',true);
            xhr.send(null);
            xhr.onreadystatechange = function() {
                if(xhr.readyState===4) {
                    if(xhr.status===200) {
                        let result  = JSON.parse(xhr.responseText);
                        if(result.code===200) {
                            resolve(result.data);
                        }
                    }
                }
            }
        }).then(result=>dispatch(getAppendMoreListAction(result)));
    };
}
export {
    getAjaxAppendMoreList,
    getAjaxChangeHomeDataAction
}