const RecipeDisplay=(props)=>{
    const{id, dishName, imgUrl, ingredientsNeeded, instructions, deleteRecipe} = props
    return (
        <section 
        className='displayRecipes'>
            <div className='recipeBox'>
                <p className='display'>
                    {dishName}</p>
                <img 
                className='recipeImage display'
                alt={dishName}
                src={imgUrl}
                />
                {/* <p className='display'>
                    {JSON.stringify(ingredientsNeeded)}</p> */}
                {ingredientsNeeded.map((ingredient)=>{
                    return (
                    <li className='list display'>
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
                    <button
                    className='button'>
                        Edit
                    </button>
                </span>
            </div>
        </section>
    )
    
}

export default RecipeDisplay