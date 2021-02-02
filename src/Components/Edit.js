import {Component} from 'react'

class Edit extends Component{
    constructor(props){
        super(props)
        this.state={
            dishName: props.dishName,
            imgUrl: props.imgUrl,
            ingredients: '',
            ingredientsNeeded: props.ingredientsNeeded,
            instructions: props.instructions,
        }
    }
    showEdit=()=>{
        // let id = this.props.id
        let showEdit = document.getElementsByClassName('editBox')
        for(let i=0; i<showEdit.length; i+=1){
            showEdit[i].style.display='block';
        }
    }

    hideEdit=()=>{
        let hideEdit = document.getElementsByClassName('editBox')
        for(let i=0; i<hideEdit.length; i+=1){
            hideEdit[i].style.display='none';
        }
    }

    updateDishName=(value)=>{
        this.setState({
            dishName: value
        })
    }

    updateImage=(value)=>{
        this.setState({
            imgUrl: value
        })
    }
    
    updateIngredients=(value)=>{
        this.setState({
            ingredients: value
        })
    }

    updateInstructions=(value)=>{
        this.setState({
            instructions: value
        })
    }

    // handleIngredients=()=>{
    //     let{ingredients} = this.state
    //     let ingredientsNeeded = []
    //     let splits = ingredients.split(' ')
    //     for(let i=0; i<splits.length; i++){
    //         ingredientsNeeded.push(splits[i])
    //     }
    //     this.setState({
    //         ingredientsNeeded: ingredientsNeeded
    //     })
    //     return ingredientsNeeded
    // }

    handleIngredients=()=>{
        let{ingredients} = this.state
        let ingredientsNeeded = []
        let splits = ingredients.split(' ')
        for(let i=0; i<splits.length; i++){
            ingredientsNeeded.push(splits[i])
        }
        if(ingredientsNeeded[0]===('')){
            this.setState({
                ingredientsNeeded: this.props.ingredientsNeeded
            })
            ingredientsNeeded=this.props.ingredientsNeeded
        } else {
            this.setState({
                ingredientsNeeded: ingredientsNeeded
            })
        }
        
        return ingredientsNeeded
    }

    updateRecipe=()=>{
        let ingredientsNeeded = this.handleIngredients()
        const {dishName, imgUrl, instructions} = this.state
        const{id, editRecipes} = this.props
        editRecipes(id, dishName, imgUrl, ingredientsNeeded, instructions)
        this.hideEdit()
    }

    render(){
        return(
            <div className='editDisplay display'>
                <button
                    className='button display'
                    onClick={()=>{this.showEdit()}}>
                        Edit
                </button>
                <input
                className='input editBox'
                placeholder='Edit Recipe Name'
                onChange={(e)=>{this.updateDishName(e.target.value)}}
                />
                <input
                className='input editBox'
                placeholder='Edit Image'
                onChange={(e)=>{this.updateImage(e.target.value)}}
                />
                <input
                className='input editBox'
                placeholder='Edit Ingredients'
                onChange={(e)=>{this.updateIngredients(e.target.value)}}
                />
                <textarea
                maxLength='270'
                className='input textarea editBox'
                placeholder='Edit Instructions'
                onChange={(e)=>{this.updateInstructions(e.target.value)}}
                /> 
                <button
                className='editBox button'
                onClick={()=>{
                    this.updateRecipe()}}>
                    Update
                </button>  
                <button
                className='editBox button'
                onClick={()=>{
                    this.hideEdit()
                }}>
                    Cancel
                </button>
            </div>
        )
    }
}

export default Edit