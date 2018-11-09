import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component {
    constructor(props){
        super(props);
    }

    goHome() {
        this.props.history.push('/dashboard');
    }

    goToPost() {
        this.props.history.push('/post/:postid');
    }

    goToAuth() {
        this.props.history.push('/');
    }

    render(){
        if (this.props.location.pathname == '/')
        {
            return null;
        }
        return(
            <div>
                <p>Account Holder: </p>
                <p>Account Number:</p>
                <p>Account username: </p>
                Nav<button onClick={()=>this.goHome()}>Home</button><button onClick={()=>this.goToPost()}>New Post</button><button onClick={()=>this.goToAuth()}>Logout</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('redux store state: ', state);
    return state;
}

export default connect(mapStateToProps)(withRouter(Nav));