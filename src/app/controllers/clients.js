const Client = require('../models/Client')

module.exports = {
    index(req, res){
        const { filter } = req.query

        if ( filter ) {
            Client.findBy(filter, function(recipes) {
                return res.render('clients/index2', { recipes, filter })

            })
        }else {
            Client.all(function(recipes) {
                return res.render('clients/index', { recipes })
            })
           
        }
      
    
    },
    show(req, res){
        Client.find(req.params.id, function(recipe) {
            if(!recipe) return res.send('Recipe not found!')

            return res.render('clients/recipe', { recipe })
        })
    
    },
    list(req, res){
        Client.all(function(recipes) {
            return res.render('clients/recipes', { recipes })
        })
    },
    about(req, res) {
        return res.render('clients/about')
    },

    chefs(req, res){
        Client.allChefs(function(chefs) {
            
            return res.render('clients/chefs', { chefs })

        })
    }

}