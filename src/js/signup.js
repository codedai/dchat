import React from 'react';
import logo from '../icon/logo.JPG';
import MyButton from '../component/MyButton';
import MyInput from '../component/MyInput';
import PasswordComfirmation from '../component/PasswordComfirmation'
import axios from 'axios'
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton'
var formStyle = {
    width: "380px",
	margin: "12em auto",
	padding: "3em 5em 2em 5em",
	background: "#fafafa",
    border: "1px solid #ebebeb",
    borderRadius: "10px",
	boxShadow: "rgba(0,0,0,0.14902) 0px 1px 1px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px",    
}

var headerStyle = {
    textAlign: "center",
    position: "relative",
    bottom: "12px"
}

var imgStyle = {
    margin: "auto",
    width: "65px",
    height: "60px",
    overflow: "hidden",
    borderRadius: "100%",
    boxShadow: "rgba(0,0,0,0.14902) 5px 3px 5px 0px,rgba(0,0,0,0.09804) 0px 1px 2px 0px",
}

class SignUp extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
        }
    }
    check(){
        if(this._email_ref._input_ref.value === ""){
            this._email_ref.setState({
                typeError: true,
                alertMessage: "Can not be null"
            })
        }
        if(this._password_comfirmation_ref._password_ref._input_ref.value === ""){
            this._password_comfirmation_ref._password_ref.setState({
                typeError: true,
                alertMessage: "Can not be null"
            })
        }
        if(this._password_comfirmation_ref._password_com_ref._input_ref.value === ""){
            this._password_comfirmation_ref._password_com_ref.setState({
                typeError: true,
                alertMessage: "Can not be null"
            })
        }
        if(this._name_ref._input_ref.value === ""){
            this._name_ref.setState({
                
                    typeError:true,
                    alertMessage: "Can not be null"
                
            })
        }
    }

    postRequest() {
        this.check()
        if (this._email_ref._input_ref.value === "" || this._password_comfirmation_ref._password_ref._input_ref.value === "" || this._password_comfirmation_ref._password_com_ref._input_ref.value === "" || this._name_ref._input_ref.value === "" ){
        }else {
            if(!(this._email_ref.state.typeError
                ||this._name_ref.state.typeError
                ||this._password_comfirmation_ref._password_ref.state.typeError
                ||this._password_comfirmation_ref._password_com_ref.state.typeError)){
                this.setState({
                    email: this._email_ref._input_ref.value,
                    password: this._password_comfirmation_ref._password_ref._input_ref.value,
                    name: this._name_ref._input_ref.value
                })
                var postJson=JSON.stringify(this.state)
                axios.post("https://jsonplaceholder.typicode.com/users",postJson).then(function(result) {    
                    console.log(result.status)})
                }
        }
        
    }

    handleClick() {
        
        this.postRequest()
    }

    // componentDidMount() {
    //     var _this = this;
    //     this.serverRequest = 
    //       axios
    //         .get("https://jsonplaceholder.typicode.com/users")
    //         .then(function(result) {    
    //          console.log(result)
    //         })
    //     axios.post("https://jsonplaceholder.typicode.com/users",{
    //         "data": {
    //           "email": "abc@163.com",
    //           "password": "123456",
    //           "name": "Sifeng Chen"
    //         }
    //       }).then(function(result) {    
    //         console.log(result.status)
    //        })
    // }
    
    componentWillUnmount(){
        this.serverRequest.abort();
      }

    render() {

        return (

        <Paper style={formStyle}>
                <header style={headerStyle}>
                    <img style={imgStyle} src={logo} />
                </header>
                <MyInput type="email" placeholder="Email" ref={(ref)=>{this._email_ref=ref}}/>
                <PasswordComfirmation ref={(ref)=>{this._password_comfirmation_ref=ref}}/>
                <MyInput type="name" placeholder="Name" ref={(ref=>(this._name_ref=ref))}/>
                <div onClick={(e)=>this.handleClick(e)}>
                <MyButton title="Sign in" />
                </div>
        </Paper>
        )
    }

  }

  export default SignUp;