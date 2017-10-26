import React, { Component } from 'react';
import Card from 'material-ui/Card'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton';


const style = {
    width: '50%',
    height: '50%'

}

const preStyle = {
    width: '80%',
    height: '80%'

}
class ImgCard extends Component {
    constructor(props){
        super(props)
        this.state={
            open:false
        }
    }

    handlePreview(){
        this.setState({open: true});
    }


    
    handleClose(){
        this.setState({open: false});
    }

    render() {

        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={(e)=>this.handleClose(e)}
            />
          ];      

        return (
            <div>
                <Card>
                    <img src={this.props.src} style={style} onClick={(e)=>this.handlePreview(e)}></img>
                </Card>
                <Dialog
                    title="preview"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={(e)=>this.handleClose(e)}
                >
                    <img src={this.props.src} style={preStyle}></img>
                </Dialog>
                    {this.props.name}
            </div>
        );
    }
}

export default ImgCard;