import { Component } from 'react'
import AddRecipes from './AddRecipes'

class Search extends Component{
    constructor(){
        super()
        this.state={
            userInput: ''
        }
    }

    handleChange=(value)=>{
        this.setState({
            userInput: value
        })
    }

    handleClick=()=>{
        this.props.filterRecipes(this.state.userInput)
    }

    handleClear=()=>{
        this.setState({
            userInput: ''
        })
        this.props.reset()
    }

    render(){
        return(
            <div>
                <h1>Search</h1>
                <input 
                placeholder='Search Recipes Here'
                value={this.state.userInput}
                onChange={(e)=> this.handleChange(e.target.value)}/>
                <button
                onClick={()=>{this.handleClick()}}>
                    Search
                </button>
                <button
                onClick={()=>{this.handleClear()}}>
                    Clear Search
                </button>
                <AddRecipes addRecipes={this.props.addRecipes}/>
            </div>
        )
    }
}

export default Search