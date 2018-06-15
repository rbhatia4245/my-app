import React from 'react';
import './menubutton.css';
class MenuButton extends React.Component{
	render(){
		return(<button id="menubutton" type="submit" onMouseDown={this.props.handleMouseDown}>MENU</button>
		);
	}
}
export default MenuButton;