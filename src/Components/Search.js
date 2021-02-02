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
                <div className='leftSide addRecipes'>
                    <h1 className='leftText'>Search</h1>
                    
                    <input 
                    className='input'
                    placeholder='Search Recipes Here'
                    value={this.state.userInput}
                    onChange={(e)=> this.handleChange(e.target.value)}/>
                    <br></br>
                    
                    <span className='searchButtons'>
                        <button
                        className='button'
                        onClick={()=>{this.handleClick()}}>
                            Search
                        </button>
                        
                        <button
                        className='button'
                        onClick={()=>{this.handleClear()}}>
                            Clear
                        </button>
                    </span>

                    <AddRecipes addRecipes={this.props.addRecipes}/>
                </div>
            </div>
        )
    }
}

export default Search