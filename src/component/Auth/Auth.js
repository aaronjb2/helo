import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Auth extends Component {
    constructor(props){
        super(props);
        this.state= {
            username:'',
            password:''
        }
        this.updateUsername=this.updateUsername.bind(this);
    }

    updateUsername(e) {
        this.setState({
            username:e.target.value
        })
    }

    updatePassword(e) {
        this.setState({
            password:e.target.value
        })
    }

    resetBoxes() {
        this.setState({
            username:'',
            password:''
        })
    }

    async login() {
        if (!this.state.username || !this.state.password) return alert('Please fill out username and password.')
        let res = await axios.post('/auth/login', {
            username:this.state.username,
            password:this.state.password
        })
        console.log(res);
        if (res.data.message === 'loggedIn') {
            this.props.history.push('/dashboard');
        } else {
            alert(res.data.message)
        }
    }

    async register() {
        if (!this.state.username || !this.state.password) return alert('Please fill out username and password.')
        let res = await axios.post('/auth/register', {
            username:this.state.username,
            password:this.state.password
        })
        console.log(res);
        if (res.data.message === 'loggedIn') {
            this.props.history.push('/dashboard');
        } else {
            alert(res.data.message);
        }
    }

    render(){
        return (
            <div>
                <h3>Username:<input value = {this.state.username} onChange = {e=>this.updateUsername(e)} /></h3>
                <h3>Password:<input value = {this.state.password} onChange = {e=>this.updatePassword(e)} /></h3>
                <button onClick = {() =>this.login()} type= 'button'>Login</button>
                <button onClick = {()=>this.register()} type='button'>Register</button>
                <button onClick = {()=>this.resetBoxes()} type='button'>Cancel</button>
            </div>
        )
    }
}

export default Auth;