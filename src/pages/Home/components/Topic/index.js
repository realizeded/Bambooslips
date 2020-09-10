import React from 'react';
import {TopicWrapper,TopicList,TopicItem} from '../../style';
import {connect} from 'react-redux';
function Topic(props) {
    const {topicList} = props;
    return (
        <TopicWrapper>
            <TopicList>
                {
                    topicList.map(item=>{
                        return (                
                        <TopicItem key={item.get('id')}>
                            <img alt="" src={item.get('src')}/>
                            <span>{item.get('text')}</span>
                            </TopicItem>);
                    })
                }
            </TopicList>
        </TopicWrapper>
    );
}
const mapStateToProps = function(state) {
    return {
        topicList:state.getIn(['home','topicList'])
    };
}
export default connect(mapStateToProps,null)(Topic);