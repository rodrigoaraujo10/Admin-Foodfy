const fs = require('fs')
const data = require('../data')
const recipes = require('../data.js')


exports.index = function(req, res){
    return res.render('admin/index', {items: recipes})

    // const { index: recipeIndex } = req.params

    // const recipe = recipes[recipeIndex]

    // if (!recipe) return res.send('Recipe not found')
}

exports.show =  function(req, res){
    const { index: recipeIndex } = req.params

    const recipe = recipes[recipeIndex]

    if (!recipe) return res.send('Recipe not found')

  

    return res.render("admin/recipe", { item: recipe})
}

