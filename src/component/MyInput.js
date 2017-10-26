import React from 'react';


class MyInput extends React.Component {

    constructor(props){
        super(props);

        this.type = this.props.type
        this.placeholder = this.props.placeholder

        this.state = {
            inputStyle: {
                input: {
                    fontSize: "14px",
                    padding: "16px 0 8px",
                    display: "block",
                    background: "#fafafa",
                    color: "#636363",
                    width: "100%",
                    border: "none",
                    borderRadius: 0,
                    borderBottom: "1px solid #757575",
                    outline: "none"
                },
                group: {
                    position: "relative", 
                    marginBottom: "30px" 
                },
                lable: {
                    color: "#dc4a4a", 
                    fontSize: "10px",
                    fontWeight: "bold",
                    position: "relative",
                    top: "8px",
                    pointerEvents: "none",
                },
                spanBar: {
                    height: "2px", 
                    width: "100%",
                    bottom: "24px", 
                    position: "absolute",
                    background: "#dc4a4a", 
                }
            },
            typeError: false,
            alertMessage: null
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange() {
        
        // Test the email address
        if(this.type === "email"){
            var emailPat=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{1,4}){1,4})$/;
            var matchArray=this._input_ref.value.match(emailPat);
            if(matchArray===null){
                this.setState({
                    typeError: true,
                    alertMessage: "should like \"example@some.com\""
                })
            }else {
                this.setState({
                    alertMessage: null,
                    typeError: false
                })
            }
        } else if(this.type === "name") {
            if(this._input_ref.value.length > 20) {
                this.setState({
                    typeError: true,
                    alertMessage: "The Length of name is at most 20"
                })
            } else {
                this.setState({
                    typeError: false,
                    alertMessage: null
                })
            }
        } else if(this.type === "password" && this.placeholder === "Password") {
            if(this._input_ref.value.length > 15) {
                this.setState({
                    typeError: true,
                    alertMessage: "The Length of password is at most 15"
                })
            } else if(this._input_ref.value.length < 6) {
                this.setState({
                    typeError: true,
                    alertMessage: "The Length of password is at least 6"
                })
            } else {
                this.setState({
                    typeError: false,
                    alertMessage: null
                })
            }
        }
    }

    render() {
        return (
            <div style={this.state.inputStyle.group}>
                <input 
                    type={this.type} 
                    style={this.state.inputStyle.input} 
                    placeholder={this.placeholder}
                    onChange={this.handleChange} 
                    ref={(ref)=>this._input_ref=ref}
                />
                {this.state.typeError?(<span style={this.state.inputStyle.spanBar} />):null}
                {this.state.typeError?(<label style={this.state.inputStyle.lable}>{this.state.alertMessage}</label>):(null)}
            </div>
        )
    }
}

export default MyInput