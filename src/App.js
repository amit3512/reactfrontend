import React from 'react';
import Header from './components/Header';
import Home from './containers/Home';
import Hero from './components/Hero';
import ContactUs from './containers/Contact Us';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Post from './containers/Post';
import AboutUs from './containers/About Us';


import './App.css';


function App(){
   return(
   
   	<div className="App">
            <Router>
            <Header/>
            <Hero/>

            <Route path='/' exact component={Home}/>
            <Route path='/about-us' exact component={AboutUs}/>
            <Route path='/contact-us' component={ContactUs}/>
            <Route path="/post/:postId" component={Post}/>
         
            
            </Router>
        
    </div>
   	
           

    );
};

export default App;
