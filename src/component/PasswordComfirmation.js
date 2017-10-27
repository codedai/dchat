import React, { Component } from 'react';
import MyInput from '../component/MyInput';

class PasswordComfirmation extends Component {    
    
    handleChange() {
        if(this._password_com_ref._input_ref.value !== this._password_ref._input_ref.value && this._password_com_ref._input_ref.value) {
            this._password_com_ref.setState({
                typeError: true,
                alertMessage: "not same as password"
            })
        }else{
            this._password_com_ref.setState({
                typeError: false,
                alertMessage: null
            })
        }
    }

    render() {
        return (
            <div>
                <div onChange={(e)=>this.handleChange(e)}>
                <MyInput type="password" placeholder="Password" ref={(ref)=>this._password_ref=ref}/>
                <MyInput type="password" placeholder="Password Comfirmation" ref={(ref)=>this._password_com_ref=ref}/>
                </div>
            </div>
        );
    }
}

export default PasswordComfirmation;