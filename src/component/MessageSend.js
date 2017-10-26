import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';
import pic from '../icon/picture.png'
import * as firebase from 'firebase'

const picButtonStyle = {
    width: "30px",
    height: "30px",
    margin: 12,
}

const sendButtonStyle = {
    width: "100px",
    margin: 12,
}
const fieldStyle = {
    width: "450px",
    margin: "auto",
    display: "center"
}
class MessageSend extends Component {


    handleSendButton() {
        var text = this._text_ref.getValue()
        var name = "WANG"
        var message = {
            name: name,
            text: text

        }
        firebase.database().ref().child('message').push(message)
    }

    selectPic() {
        this._send_pic_ref.click()
    }    

    handlePicSendButton(e) {

        var file = e.target.files[0];
        var pic = file.name
        var name = "WANg"
        var storage = firebase.storage();
        var storageRef = storage.ref('chatPic/' + pic);

        var task = storageRef.put(file);

        task.on('state_changed',
        function progress(snapshot) {
        },

        function error(err){},

        function complete(){
            storageRef.getDownloadURL().then(function(url){
                let pic = url
                let message = {
                    pic,
                    name
                }
                firebase.database().ref().child('message').push(message)
            })
            
        }
      );
    }

    render() {
        return (
            <div style={fieldStyle}>
                <input ref={(ref)=>{this._send_pic_ref=ref}} type="file" onChange={e=>this.handlePicSendButton(e)} style={{display:"none"}}></input>
                <TextField ref={(ref)=>{this._text_ref=ref}} hintText="Write someting"/>
                <RaisedButton ref={(ref)=>{this._send_ref=ref}} onClick={(e)=>this.handleSendButton(e)} label="Send" secondary={true} style={sendButtonStyle}/>
                <img type="file" ref={(ref)=>{this._img_ref=ref}} src={pic} onClick={(e)=>this.selectPic(e)} style={picButtonStyle}/>
            </div>
        );
    }
}

export default MessageSend;