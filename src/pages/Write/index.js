import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
class Write extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {isLogin} = this.props;
        if(isLogin) {
            return (
                <div>write</div>
            );
        } 
        return (<Redirect to="/"/>);

    }
}
const mapStateToProps = function(state) {
    return {
        isLogin:state.getIn(['login','isLogin'])
    }
};
export default connect(mapStateToProps,null)(Write);