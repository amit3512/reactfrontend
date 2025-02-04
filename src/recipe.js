import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients}) => {
	return(
		<div className={style.Recipes}>
		    <h1>{title}</h1>
		    <img src={image} alt="#"/>
		    <p>{calories}</p>
		    <ol>
		    {ingredients.map(ingredient =>(
		    	<li>{ingredient.text}</li>
		 
		    	)
		      )
		    }
		    		    </ol>

		    
		</div>
		);
	
};

export default Recipe;