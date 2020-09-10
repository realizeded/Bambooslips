import styled from 'styled-components';
const LoginWrapper = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color:#eee;
`;
const LoginBox = styled.div`
    width:280px;
    height:320px;
    padding:40px;
    margin:100px auto;
    background-color:#fff;
    box-shadow:0 0 4px rgba(0,0,0,0.1);
    border-radius:4px;
`;
const Input = styled.input`
    width:200px;
    height:40px;
    display:block;
    margin:20px auto;
    overflow: hidden;
    border-radius:6px;
    border:1px solid #e0c3fc;
    outline:none;
    box-sizing:border-box;
    padding:4px 10px;
`;
const Button = styled.div`
   width:200px;
   height:32px;
   line-height:32px;
   text-align:center;
   margin:24px auto;
   background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
   border-radius:14px;
   color:#fbfbfb;
   font-size:14px;
`;
export {
    Button,
    LoginWrapper,
    LoginBox,
    Input
}