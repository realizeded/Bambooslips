import {combineReducers} from 'redux-immutable';
import headerReducer from '../components/Header/store/reducer';
import homeReducer from '../pages/Home/store';
import detail from '../pages/Detail/store';
const mergeReducers = combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detail.detailReducer
});
export default mergeReducers;