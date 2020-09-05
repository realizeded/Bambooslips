import React,{Fragment} from 'react';
import {HeaderStyle,LoGo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './HeaderStyle';
// console.log(LoGo);
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {getSearchInputBlur,getSearchInputFocused} from '../../store/actionCreators';
function Header(props) {
        const {focused,handleInputBlur,handleInputFocus} = props;
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
const mapStateToProps = function(state) {
    return {
        focused:state.focused
    };
}
const mapDispatchToProps = function(dispatch) {
    return {
        handleInputFocus() {
            const action = getSearchInputFocused();
            dispatch(action);
        },
        handleInputBlur() {
            const action = getSearchInputBlur();
            dispatch(action);
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);