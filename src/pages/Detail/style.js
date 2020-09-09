import styled from 'styled-components';
const DetailBodyWrapper = styled.div`
   position:absolute;
   top:58px;
   bottom:0;
   left:0;
   right:0;      
`;
const DetailWrapper = styled.div`
    width:740px;
    height:400px;
    margin:0 auto;
    background-color:#fff;
    margin-top:10px;
    min-height:100%;
    box-sizing:border-box;
    padding:20px;
    border-radius:4px 4px 0 0;
`;
const Content = styled.div`
    h1 {
        font-size:30px;
        font-weight:700;
    }
    img {
        width:100%;
        margin:18px 0;
        border-radius:10px;
        box-shadow:0 0 4px rgba(0,0,0,0.2);
    }
    p {
        margin:14px 0;
        font-size:16px;
        font-weight:180px;
        color:#3c3c3c;
        text-shadow:0 0 1px rgba(0,0,0,0.2);
        word-break: break-word
        letter-spacing:1px;
        line-height:1.8;
    }
`;
export {
    Content,
    DetailBodyWrapper,
    DetailWrapper
};