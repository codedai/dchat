import React from 'react';

var buttonStyle = {
    button:{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: "12px 6px",
        margin: "auto",
        width: "50%",
        verticalAlign: "middle",
        color: "#fff",
        fontSize: "16px",
        lineHeight: "20px",
        WebkitFontSmoothing: "antialiased",
        textAlign: "center",
        letterSpacing: "1px",
        // background: "transparent",
        border: 0,
        borderBottom: "2px solid rgb(182, 49, 49)",
        borderRadius:"10px",
        cursor: "pointer",
        transition: "all 0.15s ease",
        focus: {
            ontline: 0
        },
        background: "#dc4a4a",
        textShadow: "text-shadow: 1px 1px 0 rgba(204, 39, 39, 0.5)",
        hover: {
            background: "#d83535"
        }
    }
}

class MyButtom extends React.Component {
    render() {
        return (
            <button type="button" style={buttonStyle.button}>
                {this.props.title}
            </button>
        );
    }
}

export default MyButtom