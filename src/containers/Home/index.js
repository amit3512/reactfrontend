import React from 'react';
import Card from '../../components/UI/Card';
import './style.css';
import SideBar from '../../components/SideBar';
import RecentPost from '../../containers/Home/RecentPost';

const Home = props=>{

	const galleryStyle={
		height:'450px',
		overflow:'hidden'

	}

	const sideImageHeigth={
		height:'132px',
	}
	return(
                <div>
                	<Card style={{margin:'20px 0'}}>
                      	<div className="galleryPost" style={galleryStyle}>
                      	 	<section style={{width:'70%'}}>
                      	 	 	<div>
                      	 	 		<img src={'https://www.elegantthemes.com/blog/wp-content/uploads/2014/03/make-writing-habit.jpg'} alt="image"/>
                      	 	 	 	
                      	 	 	</div>
                      	 	</section>
                      	 	<section className="sideImageWrapper"style={{width:'30 %'}}>
                      	 		
                      	 			<div style={sideImageHeigth}>
                      	 	 	 	<img src={'https://www.elegantthemes.com/blog/wp-content/uploads/2014/03/make-writing-habit.jpg'} alt="image"/>
                      	 	 	 	
                      	 	 		</div>
                      	 	 		<div style={sideImageHeigth}>
                      	 	 	 		<img src={'https://www.elegantthemes.com/blog/wp-content/uploads/2014/03/make-writing-habit.jpg'} alt="image"/>
                      	 	 	 	
                      	 	 		</div>
                      	 	 		<div style={sideImageHeigth}>
                      	 	 	 		<img src={'https://www.elegantthemes.com/blog/wp-content/uploads/2014/03/make-writing-habit.jpg'} alt="image"/>
                      	 	 	 	
                      	 	 		</div>
                      	 		
                      	 		
                      	 	</section>
                      	 	
                      	</div>
                     </Card>

                     <section className="homeContainer">
                      	<RecentPost style={{width:'70%' ,color:'red'}}/>
		                    <SideBar/>
                     </section>

                </div>
                     

                     
                     

               
                   
                     

                

		);
}


export default Home;
