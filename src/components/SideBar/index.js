import React,{useEffect, useState} from 'react';
import Card from '../../components/UI/Card'
import './style.css';
import blogData from '../../data/blog.json';
import {NavLink} from 'react-router-dom';


const SideBar=(props)=>{

	const [posts, setPosts]=useState([]);

	useEffect(()=>{
		
		const posts=blogData.data;
		setPosts(posts);
	},[posts]);
	return(
		<div className="sideBarContainer" >
				<Card style={{marginBottom:'12px'}}>
				    <div className="cardHeader">
				    	<span>about us</span>
				    </div>

				    <div className="profileImageContainer">
				    	<img src={require("../../blogPostImages/memories-from.jpg")} alt="image"/>
				    </div>

				    <div className="personalBlog">
				        GitHub is home to over 50 million developers working together to host and review code, manage projects, and build software together.
				    </div>
				</Card>

				<Card style={{marginBottom:'12px'}}>
				    <div className="cardHeader">
				    	<span>Social Network </span>
				    </div>
				</Card>

				<Card style={{marginBottom:'20px'}}>
				    <div className="cardHeader">
				    	<span> recent posts</span>
				    </div>
                       
				    <div className="recentPosts">
				      {
				      	posts.map(post=>{
				      		return(
				      		<NavLink key={post.id} to={`/post/${post.id}`}>
					      		<div className="recentPost">
						      		<h3> {post.blogTitle}</h3>
						      		<span>May 30,2020</span>
					             </div>
				      		</NavLink>
				      		 
				                 );
				      	
				      })
				      

				      }

				    </div>
				</Card>

				
		</div>
		)
}

export default SideBar;