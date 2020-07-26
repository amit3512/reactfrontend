import React from 'react';
import Card from '../../../components/UI/Card';
import './style.css';


const RecentPost = (props)=>{

	return(
                
                     	<div style={props.style}>
                     		 <Card style={{marginBottom:'20px'}}>
		                     	<div className="postImageWrapper">
		                     		<img src={'https://www.elegantthemes.com/blog/wp-content/uploads/2014/03/make-writing-habit.jpg'} alt=""/>
		                     	</div>

		                     	<div style={{textAlign:'center'}}>
		                     		<span>Featured</span>
		                     		<h2>Fitness Mantra</h2>
		                     		<span>Posted On</span>
		                     		
		                     		<p>......................................................................
		                     		......................................................................</p>
		                     		
		                     		<button>Read More</button>

		                     	</div>


		                     </Card>

		                     
		                </div>
		               
                 

                     
                     

               
                   
                     

                

		);
}


export default RecentPost;
