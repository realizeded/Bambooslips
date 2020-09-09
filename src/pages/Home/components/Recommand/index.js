import React from 'react';
import {connect} from 'react-redux';
import {  RecommandWrapper,RecommandItem} from '../../style';
function Recommand(props) {
    const {recommandList} = props;
    return (<RecommandWrapper>
        {
            recommandList.map(item=>{
                return (<RecommandItem key={item.get('id')} imgSrc={item.get('src')}/>);
            })
        }
    </RecommandWrapper>);
}
const mapStateToProps = function(state) {
    return {
        recommandList:state.getIn(['home','recommandList'])
    }
}
export default connect(mapStateToProps,null)(Recommand);