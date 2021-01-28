// import Axios from 'axios'
import React, {Component} from 'react'
import Header from './Header'
import AddRecipes from './AddRecipes'
import Search from './Search'
import RecipeDisplay from './RecipeDisplay'


class Recipes extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1>Recipes</h1>
                <Header/>
                <AddRecipes/>
                <Search/>
                <RecipeDisplay/>
            </div>
        )
    }
}

export default Recipes 