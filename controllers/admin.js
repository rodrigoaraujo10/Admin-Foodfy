const fs = require('fs')
const data = require('../data')
const recipes = require('../data.json')


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

exports.edit = function(req, res){
    return res.render('admin/edit')
}

exports.create = function (req, res){
    return res.render('admin/create')
} 

exports.post = function (req, res){

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send('Por favor, preencha todos os campos')
        }
    } return res.send (req.body)



}