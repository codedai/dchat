import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const divStyle={  
}

class Message extends Component {
    render() {
        return (
            <div>
            <Card>
                <CardText>
                    {this.props.text}
                </CardText>
            </Card>
                {this.props.name}
            </div>
        );
    }
}

export default Message;