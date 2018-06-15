import React from 'react';
import './Menu.css'
class Menu extends React.Component{
	render(){
	var visibility="hide";
	if(this.props.visibility)
		{
			visibility="show";
		}
	return (
			<div id="slideMenu" onMouseDown={this.props.handleMouseDown}
			className={visibility}>
			<h1><a  href="#">HOME</a></h1>
			<h1><a href="#">WORK</a></h1>
			<h1><a href="#">ABOUT</a></h1>
			<h1><a href="#">CONTACT</a></h1>
			</div>
		);
	}
}
export default Menu;