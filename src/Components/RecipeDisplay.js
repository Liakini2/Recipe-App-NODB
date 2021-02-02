import Edit from './Edit'


const RecipeDisplay=(props)=>{
    const{id, dishName, imgUrl, ingredientsNeeded, instructions, deleteRecipe, editRecipes} = props
    return (
        <div 
        className='displayAllRecipes'>
            <div className='recipeCard'>
                <p className='display text2'>
                    {dishName}</p>
                <img 
                className='display recipeImage'
                alt={dishName}
                src={imgUrl}
                />
                <div className='display'>
                    <p className='display text2'>Ingredients Needed</p>
                    {ingredientsNeeded.map((ingredient, index)=>{
                        return (
                        <li key={index}
                        className='list display'>
                            {ingredient}</li>
                        )
                    })}
                </div>
                <p className='display text2'>Instructions</p>
                <span className='display paragraph'>{instructions}</span>
                <span className='display'>
                    <button 
                    onClick={()=>{deleteRecipe(id)}}
                    className='button display'>
                        Delete
                    </button>

                    <Edit
                    id={id}
                    dishName={dishName}
                    imgUrl={imgUrl}
                    ingredientsNeeded={ingredientsNeeded}
                    instructions={instructions}
                    editRecipes={editRecipes}
                    />
                </span>
            </div>
        </div>
    )
}

export default RecipeDisplay