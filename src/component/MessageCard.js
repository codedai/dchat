import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Message from '../component/Message'
import ImgCard from '../component/ImgCard'
import * as firebase from 'firebase'

const paperStyle = {
    height: 630,
    width: 450,
    margin: "auto",
	padding: "1em 1em 2em 1em",
    display: 'center',
    overflow: "scroll"
}

class MessageCard extends Component {

    showMessage(key){
        if(this.props.messages[key].pic){            
            console.log(this.props.messages[key].pic)
            return (<ImgCard name={this.props.messages[key].name} src = {this.props.messages[key].pic}></ImgCard>)
            
        }
        return (<Message name={this.props.messages[key].name} text={this.props.messages[key].text}/>)
    }
    
    render() {
        var listMessages = []
        var keys = []
        if(this.props.messages !== []){
            keys = Object.keys(this.props.messages)
        }

        // console.log(this.props.messages.keys[0])
        listMessages = keys.map((key)=>this.showMessage(key))

        return (
            <div style={paperStyle} ref={(ref)=>this._paper_ref=ref}>
                {listMessages}
            </div>
        );
    }
}

export default MessageCard;