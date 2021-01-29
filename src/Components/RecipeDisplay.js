import React, {Component} from "react"

class RecipeDisplay extends Component{
    render(){
        let mappedRecipes = this.props.recipes.map((element, index)=>{
            return(
                <div key={index}>
                    <p>{element.dishName}</p>
                    <img 

                    alt={element.dishName}
                    src={element.imgUrl}
                    />
                    <p>{element.ingredientsNeeded}</p>
                    <p>{element.instructions}</p>
                    <button>
                        Delete
                    </button>
                    <button>
                        Edit
                    </button>
                </div>
            )
        })
        return (
            <div>
                <h1>Available Recipes</h1>
                {mappedRecipes}
            </div>
        )
    }
}

export default RecipeDisplay