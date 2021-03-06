import styled from 'styled-components';
import logoPic from './img/logo.PNG';
const HeaderStyle = styled.div `
    position:relative;
    height:56px;
    border-bottom:1px solid #b2bec3;
`;
const LoGo =styled.div `
    position:absolute;
    left:0;
    top:0;
    height:55px;
    width:100px;
    background:url(${logoPic});
    background-size:contain;
`;
const Nav = styled.div `
    width:900px;
    height:100%;
    margin:0 auto;
`;
const NavItem = styled.div`
    line-height:56px;
    padding:0 12px;
    font-size:17px;
    color:#2d3436;
    &.active {
        color:#fd79a8;
    }
    &.left {
        &:hover {
            background-color:rgba(0,0,0,0.1);
        }
        float:left;
    }
    &.right {
        float:right;
        color:#55efc4;
    }
`;
const NavSearch = styled.input`
    width:180px;
    height:34px;
    border:none;
    outline:none;
    border-radius:14px;
    background-color:#eee;
    margin-top:11px;
    margin-left:14px;
    box-sizing:border-box;
    padding:4px 38px 4px 20px;
    color:#b2bec3;
    font-size:14px;
    &::placeholder {
        letter-spacing:2px;
    }
    &.slider {
        width:240px;
    }
`;
const Addition = styled.div `
    position:absolute;
    right:0;
    top:0;
`;
const Button = styled.button `
    height:38px;
    padding:0 20px;
    border:1px solid red;
    border-radius:19px;
    margin-top:9px;
    margin-right:12px;
    background-color:#fff;
    color:red;
    font-size:14px;
    font-weight:500;
    &.wrarticle {
        background-color:red;
        color:#fff;
    }
    &.iconfont {
        font-size:14px;
    }
`;
const SearchWrapper = styled.div `
    float:left;
    position:relative;
    margin-left:20px;
    position:relative;
    .slider-enter,
    .slider-exit
    {
        transition:all .2s ease-out;
    }
    .slider-enter-active {
        width:240px;
    }
    .slider-exit-active { 
        width:180px; 
    }
    &>.iconfont {
        position:absolute;
        top:13px;
        right:4px;
     
        height:30px;
        width:30px;
        border-radius:50%;
        text-align:center;
        line-height:30px;
        color:#969696;
        &.slider {
            background-color:green;
        }
    }
`
const SearchInfo = styled.div`
    position:absolute;
    top:52px;
    left:14px;
    width:240px;
    background-color:#fff;
    box-shadow:0 0 8px rgba(0,0,0,0.2);
    padding:14px;
    box-sizing:border-box;
`;
const SearchInfoHot = styled.div`
    float:left;
    font-size:14px;
    color:#787878;
`;
const SerachInfoSwitch = styled.a`
    float:right;
    font-size:13px;
    color:#787878;
    .zoom {
        transition:all 0.4s;
        transform-origin:center center;
        font-size:14px;
        margin-right:4px;
        display:block;
        float:left;
    }
`;
const SearchInfoTitle = styled.div`
    overflow:hidden;
    line-height:30px;
`;
const SearchList = styled.div`
    overflow:hidden;
`;
const SearchListItem = styled.div`
    font-size:12px;
    color:#787878;
    border:1px solid #eee;
    float:left;
    padding:2px 12px;
    margin-right:6px;
    margin-bottom:6px;
`;
export {
    SearchList,
    SearchListItem,
    SearchInfoTitle,
    SearchInfoHot,
    SerachInfoSwitch,
    SearchInfo,
    SearchWrapper,
    Addition,
    Button,
    NavSearch,
    NavItem,
    Nav,
    LoGo,
    HeaderStyle
};
    