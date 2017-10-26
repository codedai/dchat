import React from 'react';
import * as firebase from 'firebase';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';

class SignIn extends React.Component {
  
  constructor(props){
    super(props);

    //
    // this.txtEmail = document.getElementById('txtEmail');
    // console.log(this.txtEmail)
    // this.txtPassword = document.getElementById('txtPassword');
    // this.btnLogin = document.getElementById('btnLogin');
    // this.btnSignUp = document.getElementById('btnSignUp');

    // Handle click
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange(e){
    this.setState({email:e.target.value})
  }
  handlePasswordChange(e){
    this.setState({password:e.target.value})
  }

  handleLogin(e) {

    const email = this.txtEmail.value;
    const pass = this.txtPassword.value;
    const auth = firebase.auth();



    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  }

  handleSignUp(e) {

    // Get email and pass
    const email = this.txtEmail.value;
    const pass = this.txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e=>console.log(e.message));

  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
        this.props.router.push('/posts');
      }else {
        console.log('not logged in');
      }
    });

    this.txtEmail = document.getElementById('txtEmail');
    console.log(this.txtEmail)
    this.txtPassword = document.getElementById('txtPassword');
    this.btnLogin = document.getElementById('btnLogin');
    this.btnSignUp = document.getElementById('btnSignUp');
  }
  


  render() {
    return (
      <div className="container" id="login">
            <h3 className="text-center">Login</h3>
            <div className="form-group">
						  <label>Email</label>
              <input id="txtEmail" type="email" placeholder="Email" onChange={this.handleEmailChange}/>
					  </div>
					  <div className="form-group">
						  <label>Password</label>
              <input id="txtPassword" type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
					  </div>
            <button id="btnLogin" className="btn btn-default" onClick={this.handleLogin}>
              Log in
            </button>
            <button id="btnSignUp" className="btn btn-default" onClick={this.handleSignUp}>
              Sign Up
            </button>
  </div>
  );
  }
}

export default SignIn;