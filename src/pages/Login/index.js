import React,{PureComponent}from 'react';
import {LoginWrapper,LoginBox,Input,Button} from './style';
import {login} from './store/actionCreators';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }
    render() {
        const {isLogin} = this.props;
        if(isLogin) {
            return (<Redirect to="/"/>);
        }
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input type="text" placeholder="账户" ref={(account)=>this.account = account}/>
                    <Input type="password" placeholder="密码" ref={(pwd)=>this.pwd = pwd}/>
                    <Button onClick={this.handleClickLogin}>登陆</Button>
                </LoginBox>
            </LoginWrapper>
        );
    }
    handleClickLogin() {
        let account = this.account.value;
        let pwd = this.pwd.value;
        this.props.handleLogin(account,pwd);
    }
}
const mapStateToProps = function(state) {
    return {
        isLogin:state.getIn(['login','isLogin'])
    };
}
const mapDispatchToProps = function(dispatch) {
    return {
       handleLogin(account,pwd) {
            const action = login(account,pwd);
            dispatch(action);
       } 
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);