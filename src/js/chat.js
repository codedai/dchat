import React, { Component } from 'react';

import Paper from 'material-ui/Paper'

import * as firebase from 'firebase'
import MyButton from '../component/MyButton';
import MyInput from '../component/MyInput';
import MessageSend from '../component/MessageSend'
import MessageCard from '../component/MessageCard'

const paperStyle = {
    height: 700,
    width: 500,
    margin: "3em auto",
	padding: "1em 1em 2em 1em",
    display: 'center',
}
const buttonStyle = {
    margin: "12px"
  };

class Chat extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            messages:[]
        }
    }

    componentWillMount() {
        const messageRef = firebase.database().ref().child('message')
        messageRef.on('value',snap=>{
            console.log(snap.val())
            this.setState({
                messages: snap.val()
            })
        })
        
    }
    

    render() {
        return (
            <Paper style={paperStyle}>
            <MessageCard messages={this.state.messages}/>
            <MessageSend ref={(ref)=>{this._sender_ref=ref}}/>
            </Paper>
        );
    }
}

export default Chat;