import React, { Component } from 'react';
import emptyStar from '../icon/star_empty.png'
import fullStar from '../icon/star.png'

const imgStyle = {
    width: "30px",
    height: "30px",
    display: "inline"
} 

class Rater extends Component {

	constructor(props) {
		super(props);
		this.state = {
			starStatus: []
		}
	}

	componentDidMount() {
		const cacheHits = localStorage.getItem(this.props.postId)
		
		
		if(cacheHits){
			let arrayCache = cacheHits.split(',')
			let boolCache = arrayCache.map((cacheHit)=>(cacheHit == "true"))
			this.setState({
				starStatus: boolCache
			})
		}
		
	}

	componentWillUnmount() {

	}

	handleClick(num) {
		let { starStatus } = this.state;
		starStatus = [false,false,false,false,false];
		for (let i = 0; i < num; i++) {
			starStatus[i] = true;
		}
		this.setState({
			starStatus
		});
		console.log(starStatus)
		localStorage.setItem(this.props.postId, starStatus)
	}

	render() {
		return (
			<div style={{textAlign: "right"}}>
				<img onClick={ () => this.handleClick(1)} style={imgStyle} src={this.state.starStatus[0]?fullStar:emptyStar} />
				<img onClick={ () => this.handleClick(2)} style={imgStyle} src={this.state.starStatus[1]?fullStar:emptyStar} />
				<img onClick={ () => this.handleClick(3)} style={imgStyle} src={this.state.starStatus[2]?fullStar:emptyStar} />
				<img onClick={ () => this.handleClick(4)} style={imgStyle} src={this.state.starStatus[3]?fullStar:emptyStar} />
				<img onClick={ () => this.handleClick(5)} style={imgStyle} src={this.state.starStatus[4]?fullStar:emptyStar} />
			</div>
		);
	}
}

export default Rater;