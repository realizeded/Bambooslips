import React,{Fragment,PureComponent} from 'react';
import {HeaderStyle,LoGo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,
    SearchInfo,SearchInfoHot,SerachInfoSwitch,SearchInfoTitle,SearchList,SearchListItem
} from './HeaderStyle';
// console.log(LoGo);
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {getSearchInputBlur,getSearchInputFocused,getList as getSearchList,
    getMouseInAction,
    getMouseOutAction} from '../../store/actionCreators';
import {Link} from 'react-router-dom';

import {getChangeLoginAction} from '../../pages/Login/store/actionCreators';
class Header extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {};
        this.getList = this.getList.bind(this);
    }
    getList() {
        const {focused,list,handleMouseEnterSearch,handleMouseLeave,mouseIn,handleSearchSwitch} = this.props;
        if(!focused&&!mouseIn) {
            return null;
        }
        return ( <SearchInfo onMouseEnter={handleMouseEnterSearch} onMouseLeave={handleMouseLeave}>
            <SearchInfoTitle>
                <SearchInfoHot>
                    热门搜索
                    </SearchInfoHot>
                    <SerachInfoSwitch onClick={handleSearchSwitch.bind(this)}>
                    <i className="iconfont zoom" ref={rotateIcon=>this.rotateIcon = rotateIcon}>&#xe66c;</i>
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
        const {handleLogOut,isLogin,focused,handleInputBlur,handleInputFocus,list} = this.props;
        return (<HeaderStyle>
               <Link to="/">
                   <LoGo/>
                </Link>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                {
                    (!isLogin)? <Link to="/login"><NavItem className="right">登陆</NavItem></Link>:<NavItem className="right" onClick={handleLogOut}>退出</NavItem>
                }
               
                <NavItem className="right">Aa</NavItem>
                <SearchWrapper>
                    <CSSTransition in={focused} timeout={200} classNames="slider">
                            <Fragment>
                               <NavSearch placeholder="搜索" className={focused?'slider':''} onFocus={handleInputFocus.bind(this,list)} onBlur={handleInputBlur}/>
                               <i className={focused?'slider iconfont':'iconfont'}>&#xe618;</i>
                                </Fragment>
                        </CSSTransition>
                        {
                            this.getList()
                        }
                   </SearchWrapper>

                <Addition>
                    <Button className="sign">注册</Button>
                    <Link to="/write">
                        <Button className="wrarticle">
                        <i className="iconfont">&#xe96a;</i>
                            写文章
                        </Button>
                    </Link>
                    </Addition>
                </Nav>
                
        </HeaderStyle>);
    }
}
const mapStateToProps = function(state) {
    return {
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list'),
        mouseIn:state.getIn(['header','mouseIn']),
        isLogin:state.getIn(['login','isLogin'])
    };
}
const mapDispatchToProps = function(dispatch) {
    return {
        handleInputFocus(list) {
            
            if(list.size==null) {
                dispatch(getSearchList());
            }
            dispatch(getSearchInputFocused());   

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
        },
        handleSearchSwitch() {
            let originDeg = this.rotateIcon.style.transform.replace(/[^0-9]/ig,'');
            if(originDeg.length===0) {
                originDeg = '0';
            }
            originDeg = parseInt(originDeg)+360;
            this.rotateIcon.style.transform = `rotate(${originDeg}deg)`;
            // console.log(this.rotateIcon.style.transform)
        },
        handleLogOut() {
            const action = getChangeLoginAction();
            dispatch(action);
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);