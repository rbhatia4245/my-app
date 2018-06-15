import React, {Component} from "react";
import MenuButton from './MenuButton.js';
import Menu from './Menu.js'
class HomeContainer extends Component {
	constructor(props){
		super(props);
		this.state={
			visible:false
		};
		this.toggleMenu=this.toggleMenu.bind(this);
		this.handleMouseDown=this.handleMouseDown.bind(this);
	}
	handleMouseDown(e){
		this.toggleMenu();
		console.log("clicked");
		e.stopPropagation();
	}
	toggleMenu(){
		this.setState({
			visible:!this.state.visible
		});
	}
	render(){
		return(
					<div>
					<div className="Headbar">
					<span className="ABHISHEK-JASSAL">Abhishek Jassal</span>
					<MenuButton handleMouseDown={this.handleMouseDown}/>
					</div>
					<Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
					</div>
					
		);
	}
}
export default HomeContainer;