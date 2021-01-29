import axios from 'axios'
import React, {Component} from 'react'
import Header from './Header'
import Search from './Search'
import RecipeDisplay from './RecipeDisplay'


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

    addRecipes=()=>{
        axios.post(`/api/recipes`)
        .then(res=>{
            this.setState({
                recipes: res.data
            })
        })
        .catch(err=>console.log(err))
    }

    editRecipes=(id)=>{
        axios.put(`/api/recipes?id=${id}`)
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

    reset=()=>{
        this.componentDidMount()
    }

    render(){
        return(
            <div>
                <Header/> 
                <Search filterRecipes={this.filterRecipes} reset={this.reset} addRecipes={this.addRecipes}/>
                <RecipeDisplay recipes={this.state.recipes}/>
            </div>
        )
    }
}

export default Recipes 