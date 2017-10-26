import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Rater from '../component/Rater'
import showButton from '../icon/download.png'
import hideButton from '../icon/up-arrow.png'
import CommentCard from '../component/CommentCard'

const divStyle = {
    // height: 100,
    // width: '80%',
    width: "90%",
	margin: "auto",
	padding: "1em 1em 2em 1em",
    display: 'center',
}

const cardHearderStyle = {
    height: "40px",
    textAlign: "center",
    padding: "10px 0 0 0",
    backgroundColor: "#c4c4c4"
}

const cardActionShowAndHideStyle = {
    height: "40px",
    backgroundColor: "#e7e7e7",
}

const showAndHideLabelStyle = {
    position: "relative",
    top: "10%",
    marginLeft: "20px",
}

const showAndHideButtonStyle = {
    width: "30px",
    height: "30px",
    position: "relative",
    marginRight: "20px",
    top: "-10%",
    float: "right"
}

class PostCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            showExpand: true
        }
    }

    componentDidMount() {
        console.log(this.props)
    }
    
    componentWillUnmount() {
    }

    handleClick(){
        var prevFlag = this.state.showExpand
        this.setState({
            showExpand: !prevFlag
        })
    }

    render() {

        const comments = this.props.comment
        var listComments = {}
        if(comments === undefined){
        }else{
            listComments = comments.map((comment)=>(
                <CommentCard key={comment.id} body={comment.body} name={comment.name}/>
            ))
        }
        return (
            <Card >
                <CardHeader style={cardHearderStyle}
                    title={this.props.title}
                />
                <CardText>
                    {this.props.postText}
                </CardText>
                <CardActions>}>
                    <Rater postId={this.props.postId}/>
                </CardActions>
                <CardActions style={cardActionShowAndHideStyle}>
                    <label style={showAndHideLabelStyle}>{this.state.showExpand?"Show Comments":"Hide Comments"} </label>
                    <img onClick={(e)=>this.handleClick(e)} src={this.state.showExpand?showButton:hideButton} style={showAndHideButtonStyle}/>
                </CardActions>
                <Card expandable={this.state.showExpand}>
                <div style={divStyle}>
                {listComments}
                </div>
                
                </Card>
                
                </Card>
        );
    }
}

export default PostCard;