import {combineReducers} from 'redux-immutable';
import headerReducer from '../components/Header/store/reducer';
const mergeReducers = combineReducers({
    header:headerReducer
});
export default mergeReducers;