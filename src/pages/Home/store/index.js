import {fromJS} from 'immutable';
import {CHANGE_HOME_DATA,APPEND_MORE_LIST} from './actionTypes';
const defaultState = fromJS({
    topicList:[
     
    ],
    articleList:[
       
    ],
    recommandList:[
       
    ]
});
const actionsMethod = {
    [CHANGE_HOME_DATA](state,action) {
          let result = action.data;
          return state.merge({
             topicList:fromJS(result.topicList),
             recommandList:fromJS(result.recommandList),
             articleList:fromJS(result.articleList)
          });
    },
    [APPEND_MORE_LIST](state,action) {
        let result = action.data;
        return state.merge({
            articleList:state.get('articleList').concat(fromJS(result))
        });
    }
};
export default function(state=defaultState,action) {
    if(actionsMethod[action.type]) {
        return actionsMethod[action.type](state,action);
    }
    return state;
}