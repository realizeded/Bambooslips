import styled from 'styled-components';
const HomeWrapper = styled.div`
    width:960px;
    height:400px;
    margin:0 auto;
`;
const LeftContainer = styled.div`
    width:625px;
    float:left;
    padding-top:15px;
    margin-left:15px;
    .homeBananer {
        width:625px;
        height:300px;
    }
`;
const RightContainer = styled.div`
    float:right;
    padding-top:15px;
    width:280px;
    height:100px;
   
`;
const TopicWrapper = styled.div`
    margin-top:16px;
`;
const TopicList = styled.div`
    overflow:hidden;
    border-bottom:1px solid #eee;
    padding-bottom:20px;
`;
const TopicItem = styled.div`
    float:left;
    height:30px;
    border:1px solid #eee;
    margin-right:10px;
    img {
        height:30px;
        width:40px;
        float:left;
    }
    span {
        font-family:Arial, Helvetica, sans-serif;
        font-size:13px;
        line-height:30px;
        padding:0 5px;
        color:#787878;
        letter-spacing:1px;
        float:right;
        background-color:#d1d8e0;
        border-radius:0 4px 4px 0;
        overflow:hidden;
    }
`;
const ArticleWrapper = styled.div`
    padding-bottom:30px;
`;
const ArticleItem = styled.div`
    overflow:hidden;
    border-bottom:1px solid #eee;
    padding:20px 10px;
    img {
        float:right;
        width:150px;
        height:100px;
        border-radius:4px;
        border:1px solid #f0f0f0;
    }
    div {
        padding:0 6px;
        h4 {
            font-size:18px;
            font-weight:800;
            line-height:1.5;
        }
        p {
            margin: 0 0 8px;
            font-size: 13px;
            line-height: 24px;
            color: #999;
        }
    }
`;
const RecommandWrapper = styled.div`

`;
const RecommandItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgSrc}) no-repeat center center;
    background-size:280px 50px;
    border:1px solid #eee;
    border-radius:4px;
    margin-bottom:10px;
`;
const MoreListButton = styled.button`
    width:100%;
    height:40px;
    line-height:40px;
    border-radius:10px;
    text-align:center;
    border:none;
    outline:none;
    box-shadow:0 0 8px rgba(0,0,0,0.2);
    background-color:#67e6dc;
`;
const BackTo = styled.div`
    position:fixed;
    height:80px;
    width:80px;
    right:100px;
    bottom:100px;
    border:1px solid #ccc;
    line-height:80px;    
    text-align:center;
    font-size:14px;
`;
export{
    BackTo,
    MoreListButton,
    RecommandWrapper,
    RecommandItem,
    ArticleItem,
    ArticleWrapper,
    TopicList,
    TopicItem,
    TopicWrapper,
    HomeWrapper,
    LeftContainer,
    RightContainer
};
