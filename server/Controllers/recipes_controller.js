recipes = [
    {
        id: 0,
        dishName: 'Deviled Eggs',
        imgUrl: 'https://media.istockphoto.com/photos/deviled-eggs-picture-id174978970?k=6&m=174978970&s=612x612&w=0&h=w622ibQ7SHoWDw1UyCOANjM8L4K20hwnLXaxPTyhxZY=',
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
        ingredientsNeeded: ['Tortillas', 'Ground Beef', 'Cheese', 'Letuce', 'Tomatoe', 'Sour Cream', 'Taco Seasoning', 'Onion'],
        instructions: 'Saute onion in oil for 3 minutes, add ground beef and seasoning and cook until beef has turned brown in color. Warm tortillas in microwave or on stove top. Assemble your taco with prefered toppings.'
    },
    {
        id: 4,
        dishName: 'Pumpkin Chili',
        imgUrl: 'https://media.istockphoto.com/photos/latin-american-chilean-food-traditional-chilean-carbonara-stewed-beef-picture-id823104634?s=170x170',
        ingredientsNeeded: ['Red Onion', 'Carrots', 'Garlic', 'Ground Beef', 'Pureed Pumpkin', 'Chicken Bone Broth'],
        instructions: 'Saute onion in oil for 3 minutes. Then add carrots, garlic, and pepper. Cook for another 2 minutes. Add the ground beef and cook until the meat turns brown. Add the remaining ingredients and stir well. Secure lid on instant pot and allow food to cook 20 to 30 minutes.'
    },
    {
        id: 5,
        dishName: 'Chicken Fried Rice',
        imgUrl: 'https://media.istockphoto.com/photos/chicken-fried-rice-picture-id945606006?s=170x170',
        ingredientsNeeded: ['Rice', 'Chicken', 'Egg', 'Vegetables', 'Soy Sauce', 'Ginger', 'Garlic'],
        instructions: 'Cook white rice. In a skillet add ginger, garlic, and chicken. Once chicken is completely cooked place to the side. Add egg and vegetables. Cook until eggs are scrambled and vegetables are soft. Add all ingredients back into skillet, season to taste.'
    },
    {
        id: 6,
        dishName: 'Crepes',
        imgUrl: 'https://media.istockphoto.com/photos/crepes-with-chocolate-sauce-and-powdered-sugar-picture-id811988342?k=6&m=811988342&s=612x612&w=0&h=hchfqf3fJaKNs5j1IDIZSnoZ78cdAyvZgF9qYK-wJW8=',
        ingredientsNeeded: ['Flour', 'Water', 'Egg', 'Vanilla'],
        instructions: 'Savory or Sweet, Yummy Treat'
    },
    {
        id: 7,
        dishName: 'Spaghetti',
        imgUrl: 'https://media.istockphoto.com/photos/pasta-plate-picture-id632439546?s=170x170',
        ingredientsNeeded: ['Pasta', 'Tomatoe Sauce', 'Garlic'],
        instructions: 'Boil Pasta'
    },
    {
        id: 8,
        dishName: 'Spaghetti',
        imgUrl: 'https://media.istockphoto.com/photos/pasta-plate-picture-id632439546?s=170x170',
        ingredientsNeeded: ['Pasta', 'Tomatoe Sauce', 'Garlic'],
        instructions: 'Boil Pasta'
    },
    {
        id: 9,
        dishName: 'Spaghetti',
        imgUrl: 'https://media.istockphoto.com/photos/pasta-plate-picture-id632439546?s=170x170',
        ingredientsNeeded: ['Pasta', 'Tomatoe Sauce', 'Garlic'],
        instructions: 'Boil Pasta'
    },
    {
        id: 10,
        dishName: 'Spaghetti',
        imgUrl: 'https://media.istockphoto.com/photos/pasta-plate-picture-id632439546?s=170x170',
        ingredientsNeeded: ['Pasta', 'Tomatoe Sauce', 'Garlic'],
        instructions: 'Boil Pasta'
    },
    {
        id: 11,
        dishName: 'Spaghetti',
        imgUrl: 'https://media.istockphoto.com/photos/pasta-plate-picture-id632439546?s=170x170',
        ingredientsNeeded: ['Pasta', 'Tomatoe Sauce', 'Garlic'],
        instructions: 'Boil Pasta'
    },
]
id=12

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
        const {id} = req.query
        let index = recipes.findIndex(recipe=>recipe.id=== +id)
        recipes.splice(index, 1)
        res.status(200).send(recipes)
    }
}