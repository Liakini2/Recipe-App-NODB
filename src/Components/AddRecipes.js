import {Component} from 'react'

class AddRecipes extends Component{
    constructor(){
        super()
        this.state={
            recipe: '',
            ingredients: '',
            ingredientsNeeded: [],
            image: '',
            instructions: '',
        }
    }

    handleRecipe=(value)=>{
        this.setState({
            recipe: value
        })
    }

    ingredientsValue=(value)=>{
        this.setState({
            ingredients: value
        })
    }

    handleIngredients=()=>{
        let ingredients = this.state.ingredients
        let ingredientsNeeded = this.state.ingredientsNeeded
        let splits = ingredients.split(' ')
        for(let i=0; i<splits.length; i++){
            ingredientsNeeded.push(splits[i])
        }
        this.setState({
            ingredientsNeeded: ingredientsNeeded
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
        const {recipe, ingredientsNeeded, image, instructions} = this.state
        this.props.addRecipes(recipe, image, ingredientsNeeded, instructions)
    }

    render(){
        const {recipe, ingredients, image, instructions} = this.state
        return(
            <aside className='float addRecipe'>
                <h1 className='text1'>Add Recipes</h1>
                <input 
                placeholder='Recipe Name'
                value={recipe}
                onChange={(e)=> this.handleRecipe(e.target.value)}/>
                <input
                id='ingredients'
                placeholder='Ingredients Needed'
                value={ingredients}
                onChange={(e)=>this.ingredientsValue(e.target.value)}
                />
                <input
                placeholder='Image URL'
                value={image}
                onChange={(e)=>this.handleImage(e.target.value)}/>
                <textarea
                placeholder='Instructions'
                value={instructions}
                onChange={(e)=>this.handleInstructions(e.target.value)}/>
                <button
                className='button'
                onClick={()=>{
                    this.handleIngredients()
                    this.handleAddRecipe() 
                    }}>
                    Add
                </button>
            </aside>
        )
    }
}

export default AddRecipes