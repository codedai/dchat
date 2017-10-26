import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase';
import {Router, Route, Link, hashHistory, IndexRoute, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Posts from './js/posts'
import SignIn from './js/signin.js'
import SignUp from './js/signup'
import Chat from './js/chat'

const config = {
  apiKey: "AIzaSyBmFQUrrnkGEnl88kLz-58F2IeA__BZFj8",
  authDomain: "daichat-83ceb.firebaseapp.com",
  databaseURL: "https://daichat-83ceb.firebaseio.com",
  projectId: "daichat-83ceb",
  storageBucket: "daichat-83ceb.appspot.com",
  messagingSenderId: "5938595064"
};
firebase.initializeApp(config);


ReactDOM.render(
  <MuiThemeProvider>
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={SignUp} />
      <Route path="posts" component={Posts} />
      <Route path="chat" component={Chat} />
      {/* <Route path="chat" component={Chat}/> */}
    </Route>
  </Router>
  </MuiThemeProvider>,
  // <SignUp />,
  document.getElementById("root")
);
