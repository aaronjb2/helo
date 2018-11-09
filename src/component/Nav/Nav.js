import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

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
                Nav<button onClick={()=>this.goHome()}>Home</button><button onClick={()=>this.goToPost()}>New Post</button><button onClick={()=>this.goToAuth()}>Logout</button>
            </div>
        )
    }
}
export default withRouter(Nav);