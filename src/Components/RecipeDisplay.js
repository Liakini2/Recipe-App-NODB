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
                <div>
                    <p className='display'>Ingredients Needed</p>
                    {ingredientsNeeded.map((ingredient, index)=>{
                        return (
                        <li key={index}
                        className='list'>
                            {ingredient}</li>
                        )
                    })}
                </div>
                <p className='display'>Instructions</p>
                <span className='text2'>{instructions}</span>
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