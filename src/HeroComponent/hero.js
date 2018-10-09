import React from 'react';

export default class Hero extends React.Component{
	constructor(props){
		super(props);
		this.state={
			title:"Simple React App",
		};
	}

	render(){
		return (<p>{this.props.title}</p>);
	}
}
