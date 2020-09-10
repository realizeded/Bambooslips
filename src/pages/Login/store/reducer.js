import {fromJS} from "immutable";
import {CHANGE_IS_LOGIN} from './actionTypes';
const defaultState = fromJS({
    isLogin:false
});
const mapActions = {
    [CHANGE_IS_LOGIN](state,action) {
        return state.set('isLogin',!state.get('isLogin'));
    }
};
export default function(state=defaultState,action) {
    let type = action.type;
    if(mapActions[type]) {
       return mapActions[type](state,action);
    }
    return state;
};