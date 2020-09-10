import {fromJS} from 'immutable';
import {CHANGE_ARTICLE} from './actionType';
const defaultState = fromJS(
    {
        article:{
            title:'',
            content:''
        }
    }
);
const mapActions = {
    [CHANGE_ARTICLE](state,action) {
        let data = action.data;
       return state.set('article',fromJS(data));
    }
}
export default function(state=defaultState,action) {
    if(mapActions[action.type]) {
        return mapActions[action.type](state,action);
    }
    return state;
};