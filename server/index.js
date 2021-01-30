const express = require('express')
const app = express()
const rc = require('./Controllers/recipes_controller')
app.use(express.json())


app.get('/api/recipes', rc.recipesDisplay)
app.post('/api/recipes', rc.addRecipes)
app.put(`/api/recipes/:id`, rc.editRecipes)
app.delete(`/api/recipes`, rc.deleteRecipe)


const port = 3030
app.listen(port, ()=>{
    console.log(`Your server is listening on port ${port}`)
})