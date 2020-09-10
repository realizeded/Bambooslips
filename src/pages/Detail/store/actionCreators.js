import {CHANGE_ARTICLE} from './actionType'
const getChangeArticleDetailAction = function(data) {
    return {
        type:CHANGE_ARTICLE,
        data
    };
};
const getAjaxDetailArticle = function() {
    return (dispatch)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('get','http://localhost:3000/api/detail/index.json',true);
        xhr.send(null);
        xhr.onreadystatechange = function() {
            /**
             * 0 xhr初始化还没有完成
             * 1 调用send 准备发送请求
             * 2 请求发送完毕
             * 3 接收服务器响应的数据 并解析
             * 4 数据解析完毕 可以使用
            */
           
           if(xhr.readyState===4) {
               if(xhr.status===200) {
                   let res = JSON.parse(xhr.responseText);
                //    console.log(xhr.responseText);
                if(res.code===200) {
                    const action = getChangeArticleDetailAction(res.data);
                    dispatch(action);
                }
               }
           }
        };
    };
}
export {
    getAjaxDetailArticle
}