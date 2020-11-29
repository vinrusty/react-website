import React, {Component} from 'react';
import {MenuItems} from './MenuItems';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
	state={clicked:false}

	handleClick=()=>{
		this.setState({clicked:!this.state.clicked})
	}
	render(){
		return(
			<>
			<nav className='nav-items sticky'>
			   <h1 className='nav-logo'>Topia</h1>
			   <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
               </div>
               <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                 {MenuItems.map((items,index)=>{
                 	return(
                 		<li key={index} className={items.cName}>
                 		   <NavLink exact to={items.path} activeClassName='nav-links-active'>
                 		     {items.title}
                 		   </NavLink>
                 		</li>
                 		)
                 })}
                </ul> 
             </nav>
			 <div className='space'></div>
			 </>
		)
	}
}

export default Navbar;