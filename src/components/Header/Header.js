import React,{Component} from 'react';
import {HeaderStyle,LoGo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './HeaderStyle';
// console.log(LoGo);
class Header extends Component {
    render() {
        return (<HeaderStyle>
            <LoGo/>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登陆</NavItem>
                <NavItem className="right">Aa</NavItem>
                <SearchWrapper>
                        <NavSearch placeholder="搜索"/>
                        <i class="iconfont">&#xe618;</i>
                    </SearchWrapper>
                <Addition>
                    <Button className="sign">注册</Button>
                    <Button className="wrarticle">
                    <i class="iconfont">&#xe96a;</i>
                        写文章
                        </Button>
                    </Addition>
                </Nav>
                
        </HeaderStyle>);
    }
}
export default Header;