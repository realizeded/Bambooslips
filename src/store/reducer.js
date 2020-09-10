import {combineReducers} from 'redux-immutable';
import headerReducer from '../components/Header/store/reducer';
import homeReducer from '../pages/Home/store';
import detail from '../pages/Detail/store';
import loginReducer from '../pages/Login/store/reducer';
const mergeReducers = combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detail.detailReducer,
    login:loginReducer
});
export default mergeReducers;