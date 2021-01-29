import React, {Component} from 'react'

class AddRecipes extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1>Add Recipes</h1>
                <input 
                placeholder='Recipe Name'/>
                <input
                placeholder='Ingredients Needed'/>
                <input
                placeholder='Image URL'/>
                <input
                placeholder='Instructions'/>
                <button>Add Recipe</button>
            </div>
        )
    }
}

export default AddRecipes