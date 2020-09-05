import {
    INPUT_BLUR,
    INPUT_FOCUSE
} from './actionTypes';
const defaultState = {
    focused:false
};
const FunctionMap = {
    [INPUT_FOCUSE](currentState,action) {
       currentState.focused = true;
       return currentState;
    },
    [INPUT_BLUR](currentState,action) {
        currentState.focused = false;
        return currentState;     
    }
}
export default function(state=defaultState,action) {
    const type = action.type;
    if(type&&FunctionMap[type]) {
       const currentState = JSON.parse(JSON.stringify(state));
       return FunctionMap[type](currentState,action);
    }
    return state;
}
