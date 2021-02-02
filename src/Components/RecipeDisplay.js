import Edit from './Edit'


const RecipeDisplay=(props)=>{
    const{id, dishName, imgUrl, ingredientsNeeded, instructions, deleteRecipe, editRecipes} = props
    return (
        <section 
        className='float displayRecipes'>
            <div className='recipeBox'>
                <p className='display'>
                    {dishName}</p>
                <img 
                className='recipeImage'
                alt={dishName}
                src={imgUrl}
                />
                {ingredientsNeeded.map((ingredient, index)=>{
                    return (
                    <li key={index}>
                        {ingredient}</li>
                    )
                })}
                <p>{instructions}</p>
                <span>
                    
                    <button 
                    onClick={()=>{deleteRecipe(id)}}
                    className='button'>
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
        </section>
    )
}

export default RecipeDisplay