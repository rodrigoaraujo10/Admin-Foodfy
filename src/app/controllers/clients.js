const Client = require('../models/Client')

module.exports = {
    index(req, res){
        Client.all(function(recipes) {
            return res.render('clients/index', { recipes })
        })
       
    
    },
    show(req, res){
        Client.find(req.params.id, function(recipe) {
            if(!recipe) return res.send('Recipe not found!')

            return res.render('clients/recipe', { recipe })
        })
    
    },
    list(req, res){
        return res.render('clients/recipes', { items: data.recipes })
    },
    about(req, res) {
        return res.render('clients/about')
    },

    chefs(req, res){
        return res.render('clients/chefs')
    }

}