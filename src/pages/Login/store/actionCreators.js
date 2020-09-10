import {CHANGE_IS_LOGIN} from './actionTypes';

const getChangeLoginAction = function() {
    return {
        type:CHANGE_IS_LOGIN
    }
}
const login = function(account,pwd) {
    console.log(`${account}--${pwd}`);
    return (dispatch)=>{
         /* 
         发起ajax
         */   
        const action = getChangeLoginAction();
        dispatch(action);
    };
}
export {
    login,
    getChangeLoginAction
}