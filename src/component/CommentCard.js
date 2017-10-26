import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Rater from '../component/Rater'
import showButton from '../icon/download.png'
import hideButton from '../icon/up-arrow.png'

const inforStyle = {
    height: "40px",
    backgroundColor: "#e7e7e7",
}

const nameLabelStyle = {
    position: "relative",
    top: "10%",
    marginLeft: "20px",
}


class CommentCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            showExpand: true
        }
    }

    render() {
        return (
            <Card >
                <CardText>
                    {this.props.body}
                </CardText>
                <CardActions style={inforStyle}>
                    <label style={nameLabelStyle}>{this.props.name} </label>
                </CardActions>                
            </Card>
        );
    }
}

export default CommentCard;