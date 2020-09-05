import {INPUT_FOCUSE,INPUT_BLUR} from './actionTypes';
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
export {
    getSearchInputBlur,
    getSearchInputFocused
}