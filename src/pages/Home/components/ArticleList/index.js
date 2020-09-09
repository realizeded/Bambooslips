import React from 'react';
import { ArticleItem,ArticleWrapper,MoreListButton} from '../../style';
import {connect} from 'react-redux';
import {getAjaxAppendMoreList} from '../../store/actionCreators';
import {Link} from 'react-router-dom';
function ArticleList(props) {
    const {articleList,handleMoreClick} = props;
    return (
        <ArticleWrapper>
            {
                articleList.map(item=>{
                    return (
                        <Link to="/detail" >
                        <ArticleItem key={item.id}>
                        <img  src={item.get('src')} alt=""/>
                        <div>
                            <h4>{item.get('title')}</h4>
                            <p>
                                {item.get('body')}
                            </p>
                            </div>
                    </ArticleItem>
                    </Link>
                    );
                })
            }
            <MoreListButton onClick={handleMoreClick}>
                    加载更多
                </MoreListButton>
        </ArticleWrapper>
    );
}
const mapStateToProps = function(state) {
    return {
        articleList:state.getIn(['home','articleList'])
    }
};
const mapDispatchToProps = function(dispatch) {
    return {
        handleMoreClick() {
            const action = getAjaxAppendMoreList();
                dispatch(action);
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ArticleList);