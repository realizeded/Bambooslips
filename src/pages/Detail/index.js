import React,{PureComponent} from 'react';
import {DetailWrapper,DetailBodyWrapper,Content} from './style';
import {connect} from 'react-redux';
import {getAjaxDetailArticle} from './store/actionCreators';
class Detail extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {article} = this.props;
        return (
       <DetailBodyWrapper>     
        <DetailWrapper>
            <Content>
                    <h1>{article.get('title')}</h1>
                   <div dangerouslySetInnerHTML={{__html:article.get('content')}}>
                        
                        </div>
               </Content>
            </DetailWrapper>
            </DetailBodyWrapper>
            );
    }
    componentDidMount() {
        this.props.getDetail();
    }
}
const mapStateToProps = function(state) {
    return {
        article:state.getIn(['detail','article'])
    }
};
const mapDispatchToProps = function(dispatch) {
    return {
        getDetail() {
            const action = getAjaxDetailArticle();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail);