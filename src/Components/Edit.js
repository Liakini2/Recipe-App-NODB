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

    showEditButton=()=>{
        let showEditButton = document.getElementsByClassName('editButton')
        for(let i=0; i<showEditButton.length; i+=1){
            showEditButton[i].style.display='block'
        }
    }

    hideEditButton=()=>{
        let hideEditButton = document.getElementsByClassName('editButton')
        for(let i=0; i<hideEditButton.length; i+=1){
            hideEditButton[i].style.display='none'
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
                    className='button editButton display'
                    onClick={()=>{
                        this.showEdit()
                        this.hideEditButton()
                        }}>
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
                <span className='display buttons1'>
                    <button
                    className='editBox button'
                    onClick={()=>{
                        this.updateRecipe()
                        this.showEditButton()
                        }}>
                        Update
                    </button>  
                    <button
                    className='editBox button'
                    onClick={()=>{
                        this.hideEdit()
                        this.showEditButton()
                    }}>
                        Cancel
                    </button>
                </span>
            </div>
        )
    }
}

export default Edit