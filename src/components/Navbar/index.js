import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import './style.css';

const Navbar = () => {

	const [search, setSearch] = useState(false);

	const submitSearch=(e)=>{
		e.preventDefault();
		alert('Searched');
	}

	const openSearch = () => {
		setSearch(!search);

	}
      const searchClass=search?'searchInput active':'searchInput';
	
    return(
		<div className="navbar">
		  <ul className='navbarMenu'>
		   <li><NavLink to="/">Home</NavLink></li>
	       <li><NavLink to="/contact-us">Contact Us</NavLink></li>
	       <li><NavLink to="/about-us">About </NavLink></li>
	       <li><NavLink to="/post">Posts</NavLink></li>
	       <li><NavLink to="/">TIA</NavLink></li>
	      </ul>
	      <div className='search'>
	         <form onSubmit={submitSearch}>
	           <input className={searchClass} type="text" placeholder="Search"/>
	           <img onClick={openSearch} className="searchIcon" src={require('../../assets/search.png')} alt=""/>
	         </form>
            </div>
	    </div>  

		  
		   
		
		)
}
export default Navbar;
	




	
	        
	    