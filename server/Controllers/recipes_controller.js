recipes = [
    {
        id: 0,
        dishName: 'Deviled Eggs',
        imgUrl: 'https://media.istockphoto.com/photos/deviled-eggs-with-paprika-picture-id491169864?s=170x170',
        ingredientsNeeded: ['Eggs', 'Mayonaise', 'Bacon'],
        instructions: "Boil eggs"
    },
    {
        id: 1,
        dishName: 'Chocolate Cake',
        imgUrl: 'https://media.istockphoto.com/photos/confectioner-decorating-chocolate-cake-closeup-picture-id1187830875?s=170x170',
        ingredientsNeeded: ['Flour', 'Egg', 'Coco Powder'],
        instructions: 'Cook Cake'
    },
    {
        id: 2,
        dishName: 'Spaghetti',
        imgUrl: 'https://media.istockphoto.com/photos/pasta-plate-picture-id632439546?s=170x170',
        ingredientsNeeded: ['Pasta', 'Tomatoe Sauce', 'Garlic'],
        instructions: 'Boil Pasta'
    },
    {
        id: 3,
        dishName: 'Tacos',
        imgUrl: 'https://media.istockphoto.com/photos/soft-beef-tacos-with-fries-picture-id614313140?s=170x170',
        ingredientsNeeded: ['Tortillas', 'Ground Beef', 'Cheese', 'Letuce', 'Tomatoe'],
        instructions: 'Eat all the tacos, cause you are super hungry'
    },
    {
        id: 4,
        dishName: 'Super good Shrimp',
        imgUrl: 'https://media.istockphoto.com/photos/cajun-shrimp-picture-id610264540?s=170x170',
        ingredientsNeeded: ['Shrimp', 'Spices'],
        instructions: 'Cook the Shrimp, eat all the shrimp.'
    },
    {
        id: 5,
        dishName: 'Fried Rice',
        imgUrl: 'https://media.istockphoto.com/photos/chicken-fried-rice-picture-id945606006?s=170x170',
        ingredientsNeeded: ['Rice', 'Egg', 'Vegitables'],
        instructions: 'Cook rice at a high heat.'
    },
    {
        id: 6,
        dishName: 'Crepes',
        imgUrl: 'https://media.istockphoto.com/photos/crepes-with-chocolate-sauce-and-powdered-sugar-picture-id811988342?k=6&m=811988342&s=612x612&w=0&h=hchfqf3fJaKNs5j1IDIZSnoZ78cdAyvZgF9qYK-wJW8=',
        ingredientsNeeded: ['Flour', 'Water', 'Egg', 'Vanilla'],
        instructions: 'Savory or Sweet, Yummy Treat'
    },
]
id=0

module.exports = {
    recipesDisplay: (req, res)=>{
        res.status(200).send(recipes)
    },
    addRecipes: (req, res)=>{
        const {dishName, imgUrl, ingredientsNeeded, instructions} = req.body
        let recipe = {id, dishName, imgUrl, ingredientsNeeded, instructions}
        recipes.push(recipe)
        id++
        res.status(200).send(recipes)
    }, 
    editRecipes: (req, res)=>{
        const {dishName, imgUrl, ingredientsNeeded, instructions} = req.body
        const {id} = req.params
        let index = recipes.findIndex(recipe => recipe.id === +id)
        let recipe = recipes[index]
        recipes[index] = {
            id: recipe.id,
            dishName: dishName || recipe.dishName,
            imgUrl: imgUrl || recipe.imgUrl,
            ingredientsNeeded: ingredientsNeeded || recipe.ingredientsNeeded,
            instructions: instructions || recipe.instructions,
        }
        res.status(200).send(recipes)
    },
    deleteRecipe: (req, res)=>{
        let index = recipes.findIndex(recipe=>recipe.id=== +req.params.id)
        recipes.splice(index, 1)
        res.status(200).send(recipes)
    }
}