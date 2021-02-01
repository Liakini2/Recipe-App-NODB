import { Component } from 'react'
import Edit from './Edit'


class RecipeDisplay extends Component{
    render(){
        const{id, dishName, imgUrl, ingredientsNeeded, instructions, deleteRecipe, editRecipes} = this.props
        return (
            <section 
            className='displayRecipes'>
                <div className='recipeBox'>
                    <p className='display'>
                        {dishName}</p>
                    <img 
                    className='recipeImage display'
                    alt={dishName}
                    src={imgUrl}
                    />
                    {ingredientsNeeded.map((ingredient, index)=>{
                        return (
                        <li key={index} className='list display'>
                            {ingredient}</li>
                        )
                    })}
                    <p>{instructions}</p>
                    <span>
                        
                        <button 
                        onClick={()=>{deleteRecipe(id)}}
                        className='button'>
                            Delete
                        </button>
    
                        <Edit
                        id={id}
                        dishName={dishName}
                        imgUrl={imgUrl}
                        ingredientsNeeded={ingredientsNeeded}
                        instructions={instructions}
                        editRecipes={editRecipes}
                        />
                    </span>
                </div>
            </section>
        )
    }
}

export default RecipeDisplay