import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';
import Home from '../../containers/Home';


const Hero=(props)=>{
	return(
		<div className="hero">
		 <Card>
		   <div style={{background:'#fff', padding:'50px 0'}}>
		     <Logo/>
		     <Navbar/>
		    
		   </div>
		

		 </Card>
		   
		</div>
		)
}

export default Hero;