import axios from 'axios'
import React, {Component} from 'react'
// import './assets/css/fonts.css';
import Header from './Header'
import Search from './Search'
import RecipeDisplay from './RecipeDisplay'
import AddRecipes from './AddRecipes'


class Recipes extends Component{
    constructor(){
        super()
        this.state = {
            recipes: []
        }
    }

    componentDidMount=()=>{
        axios.get('/api/recipes')
            .then(res=>{
                this.setState({
                    recipes: res.data
                })
            })
            .catch(err=>console.log(err))
    }

    addRecipes=(dishName, imgUrl, ingredientsNeeded, instructions)=>{
        axios.post(`/api/recipes`, {dishName, imgUrl, ingredientsNeeded, instructions})
        .then(res=>{
            this.setState({
                recipes: res.data
            })
        })
        .catch(err=>console.log(err))
    }

    editRecipes=(id, dishName, imgUrl, ingredientsNeeded, instructions)=>{
        console.log(id, dishName, imgUrl, ingredientsNeeded, instructions)
        axios.put(`/api/recipes/${id}`, {dishName, imgUrl, ingredientsNeeded, instructions})
            .then(res=>{
                this.setState({
                    recipes: res.data
                })
            })
            .catch(err=>console.log(err))
    }

    deleteRecipe=(id)=>{
        axios.delete(`/api/recipes?id=${id}`)
            .then(res=>{
                this.setState({
                    recipes: res.data
                })
            })
            .catch(err=>console.log(err))
    }

    filterRecipes=(input)=>{
        let recipes = this.state.recipes
        let filteredRecipies = recipes.filter((recipe)=>{
            return recipe.dishName.toLowerCase().includes(input.toLowerCase()) 
        }) 

        this.setState({
            recipes: filteredRecipies
        })
    }

    render(){
        const{recipes}=this.state
        return(
            <div className='recipes'>
                <Header/> 
                <main>
                    <Search 
                    filterRecipes={this.filterRecipes} 
                    reset={this.componentDidMount}/>

                    <AddRecipes addRecipes={this.addRecipes}/>
                    
                    {recipes.map((recipe)=>(
                        <RecipeDisplay 
                        key={recipe.id}
                        id={recipe.id}
                        dishName={recipe.dishName}
                        imgUrl={recipe.imgUrl}
                        ingredientsNeeded={recipe.ingredientsNeeded}
                        instructions={recipe.instructions} 
                        deleteRecipe={this.deleteRecipe}
                        editRecipes={this.editRecipes}/>
                    ))
                    }

                </main>
            </div>
        )
    }
}

export default Recipes 