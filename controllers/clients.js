const recipes = require('../data.json')

exports.index = function (req, res){
    
    let recipesLimited = []

    for(let i = 0; i < 6; i ++) {
        recipesLimited.push(recipes[i])
    }
    
    return res.render('./clients/home', {items: recipesLimited})

}

exports.show =  function(req, res){
    const { index: recipeIndex } = req.params

    const recipe = recipes[recipeIndex]

    if (!recipe) return res.send('Recipe not found')

  

    return res.render("clients/recipe", { item: recipe})
}

exports.list =  function(req, res){
    return res.render('clients/recipes', { items: recipes })
}