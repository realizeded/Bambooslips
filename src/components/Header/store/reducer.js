import {
    INPUT_BLUR,
    INPUT_FOCUSE,
    SEARCH_LIST,
    MOUSEIN,
    MOUSEOUT
} from '../../../store/actionTypes';
import {Map,fromJS} from 'immutable';
const defaultState = Map({
    focused:false,
    list:[],
    mouseIn:false
});
const FunctionMap = {
    [INPUT_FOCUSE](currentState,action) {
       /**
        * set方法的实质是 根据之前的值 进行数据的整合 返回一个新的对象
       */
       return currentState.set('focused',true);
    },
    [INPUT_BLUR](currentState,action) {
        return currentState.set('focused',false);;     
    },
    [SEARCH_LIST](currentState,action) {
        return currentState.set('list',fromJS(action.data));
    },
    [MOUSEIN](currentState,action) {
        return currentState.set('mouseIn',true);
    },
    [MOUSEOUT](currentState,action) {
        return currentState.set('mouseIn',false);
    }
}
export default function(state=defaultState,action) {
    const type = action.type;
    if(type&&FunctionMap[type]) {
       return FunctionMap[type](state,action);
    }
    return state;
}
