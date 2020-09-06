import {INPUT_FOCUSE,INPUT_BLUR,SEARCH_LIST,MOUSEIN,MOUSEOUT} from './actionTypes';
const getSearchInputFocused = function() {
    const action = {
        type:INPUT_FOCUSE
    };
    return action;
};
const getSearchInputBlur = function() {
    const action = {
        type:INPUT_BLUR
    };
    return action;
};
const initList = function(data) {
    return {
        type:SEARCH_LIST,
        data
    };
}
const getList = function() {
    return (dispatch)=>{
        new Promise(function(resolve,reject) {
            let xhr = new XMLHttpRequest();
            xhr.open('get','/api/header/search.json',true);
            xhr.send(null);
            xhr.onreadystatechange = function() {
                if(xhr.readyState===4) {
                    if(xhr.status===200) {
                        const {status,data} = JSON.parse(xhr.responseText);
                        if(status==='200') {
                            dispatch(initList(data));
                        }
                    }
                }
            }
        });
    };
}
const getMouseInAction = function() {
    return {
        type:MOUSEIN
    };
}
const getMouseOutAction = function() {
    return {
        type:MOUSEOUT
    }
}
export {
    getMouseInAction,
    getMouseOutAction,
    getList,
    getSearchInputBlur,
    getSearchInputFocused
}