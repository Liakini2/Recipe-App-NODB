import React, {Component} from 'react'

class AddRecipes extends Component{
    constructor(){
        super()
        this.state={
            recipe: '',
            ingredients: '',
            image: '',
            instructions: '',
        }
    }

    handleRecipe=(value)=>{
        this.setState({
            recipe: value
        })
    }

    handleIngredients=(value)=>{
        this.setState({
            ingredients: value
        })
    }

    handleImage=(value)=>{
        this.setState({
            image: value
        })
    }

    handleInstructions=(value)=>{
        this.setState({
            instructions: value
        })
    }


    handleAddRecipe=()=>{
        const {recipe, ingredients, image, instructions} = this.state
        console.log('add recipe')
        this.props.addRecipes(recipe, image, ingredients, instructions)
    }

    render(){
        const {recipe, ingredients, image, instructions} = this.state
        return(
            <aside className='addRecipe'>
                <h1>Add Recipes</h1>
                <input 
                placeholder='Recipe Name'
                value={recipe}
                onChange={(e)=> this.handleRecipe(e.target.value)}/>
                <input
                placeholder='Ingredients Needed'
                value={ingredients}
                onChange={(e)=>this.handleIngredients(e.target.value)}/>
                <input
                placeholder='Image URL'
                value={image}
                onChange={(e)=>this.handleImage(e.target.value)}/>
                <input
                placeholder='Instructions'
                value={instructions}
                onChange={(e)=>this.handleInstructions(e.target.value)}/>
                <button
                className='button'
                onClick={this.handleAddRecipe}>
                    Add Recipe
                </button>
            </aside>
        )
    }
}

export default AddRecipes