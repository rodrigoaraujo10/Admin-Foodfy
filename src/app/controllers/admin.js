const Administration = require('../models/Administration')

module.exports = {
    index(req, res){
        return res.render('admin/index', {items: data.recipes})
    
        // const { index: recipeIndex } = req.params
    
        // const recipe = recipes[recipeIndex]
    
        // if (!recipe) return res.send('Recipe not found')
    },

    show(req, res) {
      Administration.find(req.params.id, function(recipe) {
          if(!recipe) return res.send("Recipe not found")

            return res.render('admin/recipe', { recipe })
          

      })
    
    
    },

    edit(req, res) {
        const { id } = req.params
    
        const foundRecipe = data.recipes.find(function(recipe){
            return id == recipe.id
         })
        
        if  (!foundRecipe) return res.send('Recipe not found')
    
        const recipe = {
            ...foundRecipe,
            id,
        }
    
        return res.render(`admin/edit`, { recipe })
    
    },

    create(req, res){
        return res.render('admin/create')
    },
    
    post(req, res){

        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor, preencha todos os campos')
            }
        } 
        
        Administration.create(req.body, function(recipe) {
            return res.redirect(`/admin/recipes/${recipe.id}`)
        })
    
    },

    put(req, res){
        const { id } = req.body
        let index = 0
        
        const foundRecipe = data.recipes.find(function(recipe, foundIndex){
            if ( id == recipe.id) {
                index = foundIndex
                return true    
            }
         })
        
        if  (!foundRecipe) return res.send('Recipe not found')
    
        const recipe = {
            ...foundRecipe,
            ...req.body,
            id: Number(req.body.id),
        }
    
        data.recipes[index] = recipe
    
        fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send('Write file error')
        })
    
        return res.redirect(`/admin/recipes/${id}`)
    
    },
    
    delete(req, res) {
        const { id } = req.body
    
        const filteredRecipes = data.recipes.filter(function(recipe) {
            return recipe.id != id
        })
    
        data.recipes = filteredRecipes
    
        fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
            if (err) return res.send('Write file error')
    
            return res.redirect('/admin')
        })
    }
}