import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import axios from 'axios'
import PostCard from '../component/PostCard';
import rateInfo from '../json/rateInformation.json'

const divStyle={
    margin: "10px 10px 10px 10px"
}

const paperStyle = {
    // height: 100,
    // width: '80%',
    width: "90%",
	margin: "5em auto",
	padding: "1em 1em 2em 1em",
    display: 'center',
}

class Posts extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            datas: [],
            comments: [],
            commentsById: []
        }
        this.tempComment = []
    }

    componentDidMount() {

        
        var _this = this;
        this.serverRequest = 
            axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(function(result) {    
            //  console.log(result)
            _this.setState({
            datas: result.data
            })
        })
        this.serverRequest = 
            axios
            .get("https://jsonplaceholder.typicode.com/comments")
            .then(function(result) {    
            // console.log(result)

            for(let i in result.data){
                _this.tempComment[result.data[i].postId - 1] = []
            }
            for(let i in result.data){
                _this.tempComment[result.data[i].postId - 1].push(result.data[i])
            }
            _this.setState({
                comments:result.data,
            })
        })

    }

    componentWillUnmount(){
        this.serverRequest.abort();
      }
    

    render() {
        let tempDatas = this.state.datas
        const listPosts = tempDatas.map((tempData)=>(<div key={tempData.id} style={divStyle}>
            <PostCard postId={tempData.id} comment={this.tempComment[tempData.id-1]} title={tempData.title} postText={tempData.body}/>
        </div>)
        )
        return (
            <Paper style={paperStyle}>
            {listPosts}
            </Paper>
       
        ) 
    }
}

export default Posts;