import { Component } from 'react'


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
            <aside className='float search'>
                <h1 className='text1'>Search</h1>
                
                <input 
                placeholder='Search Recipes Here'
                value={this.state.userInput}
                onChange={(e)=> this.handleChange(e.target.value)}/>
                <br></br>
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
            </aside>
        )
    }
}

export default Search