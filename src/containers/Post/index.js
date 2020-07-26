import React from 'react';

import SideBar from '../../components/SideBar';
import BlogPost from '../../components/BlogPost';
import './style.css';

const Post = (props)=>{
	
	return(
                <section className="container">
                  <BlogPost {...props}/>
                  <SideBar {...props}/>
                 </section> 

          );
}


export default Post;


                  
                

