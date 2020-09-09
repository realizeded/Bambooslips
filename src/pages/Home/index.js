import React,{PureComponent} from 'react';
import {HomeWrapper,LeftContainer,RightContainer,BackTo} from './style';
import Topic from './components/Topic';
import ArticleList from './components/ArticleList';
import Recommand from './components/Recommand';
import {connect} from 'react-redux';
import {getAjaxChangeHomeDataAction}  from './store/actionCreators';
class Home extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isScrollTop:true
        };
        this.bindEvent = this.bindEvent.bind(this);
        this.imgSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1600094665&di=7ddd9e6a5845ac689676a5f959d91c95&imgtype=jpg&src=http%3A%2F%2Fimg6.bdstatic.com%2Fimg%2Fimage%2Fpcindex%2Fsunjunpchuazhoutu.JPG';
    }
    render() {
        const {isScrollTop} = this.state;
        return (<HomeWrapper>
                    <LeftContainer>
                          <img className="homeBananer" alt="12" src={this.imgSrc}/>
                            <Topic/>
                            <ArticleList/>
                            </LeftContainer>
                        <RightContainer>
                            <Recommand/>
                            </RightContainer>
                            {
                                isScrollTop?null:(<BackTo onClick={this.handleScrollTo}>回到顶部</BackTo>)
                            }
                </HomeWrapper>);
    }
    componentDidMount() {
        const {handleGetHomeData} = this.props;
        handleGetHomeData();
        this.bindEvent();
    }
    bindEvent() {
        window.addEventListener('scroll',this.handleIsScrollTop.bind(this),true);
    }
    handleIsScrollTop(e) {
        let top = document.documentElement.scrollTop;
        if(top>100) {
            this.setState(state=>({isScrollTop:false}));
        } else {
            this.setState(state=>({isScrollTop:true}));
        }
    }
    handleScrollTo() {
        window.scrollTo(0,0);
    }
}
const mapDispatchToProps = function(dispatch) {
    return {
        handleGetHomeData() {
            const action = getAjaxChangeHomeDataAction();
            dispatch(action);
        }
    }
}
export default connect(null,mapDispatchToProps)(Home);