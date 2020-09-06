import React,{Fragment,Component} from 'react';
import {HeaderStyle,LoGo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,
    SearchInfo,SearchInfoHot,SerachInfoSwitch,SearchInfoTitle,SearchList,SearchListItem
} from './HeaderStyle';
// console.log(LoGo);
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {getSearchInputBlur,getSearchInputFocused,getList as getSearchList,
    getMouseInAction,
    getMouseOutAction} from '../../store/actionCreators';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.getList = this.getList.bind(this);
    }
    getList() {
        const {focused,list,handleMouseEnterSearch,handleMouseLeave,mouseIn} = this.props;
        if(!focused&&!mouseIn) {
            return null;
        }
        return ( <SearchInfo onMouseEnter={handleMouseEnterSearch} onMouseLeave={handleMouseLeave}>
            <SearchInfoTitle>
                <SearchInfoHot>
                    热门搜索
                    </SearchInfoHot>
                    <SerachInfoSwitch>
                        换一批
                    </SerachInfoSwitch>
                </SearchInfoTitle>
                <SearchList>
                   {
                        list.map(item=>{
                            return (<SearchListItem key={item}>
                                    {item}
                                </SearchListItem>)
                        })
                    }
                </SearchList>
        </SearchInfo>
        );
    }
    render() {
        const {focused,handleInputBlur,handleInputFocus} = this.props;
        return (<HeaderStyle>
            <LoGo/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right">Aa</NavItem>
                <SearchWrapper>
                    <CSSTransition in={focused} timeout={200} classNames="slider">
                            <Fragment>
                               <NavSearch placeholder="搜索" className={focused?'slider':''} onFocus={handleInputFocus} onBlur={handleInputBlur}/>
                               <i className={focused?'slider iconfont':'iconfont'}>&#xe618;</i>
                                </Fragment>
                        </CSSTransition>
                        {
                            this.getList()
                        }
                   </SearchWrapper>

                <Addition>
                    <Button className="sign">注册</Button>
                    <Button className="wrarticle">
                    <i className="iconfont">&#xe96a;</i>
                        写文章
                        </Button>
                    </Addition>
                </Nav>
                
        </HeaderStyle>);
    }
}
const mapStateToProps = function(state) {
    return {
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list'),
        mouseIn:state.getIn(['header','mouseIn'])
    };
}
const mapDispatchToProps = function(dispatch) {
    return {
        handleInputFocus() {
            dispatch(getSearchInputFocused());
            dispatch(getSearchList());
        },
        handleInputBlur() {
            const action = getSearchInputBlur();
            dispatch(action);
        },
        handleMouseEnterSearch(e) {
            dispatch(getMouseInAction());
        },
        handleMouseLeave(e) {
            dispatch(getMouseOutAction());
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);