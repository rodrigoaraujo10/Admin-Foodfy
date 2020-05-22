const Administration = require('../models/Administration')

module.exports = {
    index(req, res){
        Administration.all(function(recipes){
            
            
            return res.render('admin/index', { recipes })
        }) 
        
    
    },

    show(req, res) {
      Administration.find(req.params.id, function(recipe) {
          if(!recipe) return res.send("Recipe not found")

            return res.render('admin/recipe', { recipe })
          

      })
    
    
    },

    edit(req, res) {
       Administration.find(req.params.id, function(recipe) {
           if(!recipe) return res.send("Recipe not found")

        Administration.chefSelectOptions(function(options) {
            return res.render('admin/edit', {chefOptions: options, recipe})

       })

        })
    },
    
    

    create(req, res){
        Administration.chefSelectOptions(function(options) {
            return res.render('admin/create', {chefOptions: options})
        
        })
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
      const keys = Object.keys(req.body)

      for (key of keys) {
          if (req.body[key] == "") {
              return res.send('Por favor, preencha todos os campos')
          }
      }

      Administration.update(req.body, function() {
          return res.redirect(`/admin/recipes/${req.body.id}`)
      })
    
    },
    
    delete(req, res) {
        Administration.delete(req.body.id, function() {
            return res.redirect(`/admin`)
        })
},



    createChef(req, res) {
        return res.render('admin/createChef')
    },

    postChef(req, res) {
        const keys = Object.keys(req.body)
    
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Por favor, preencha todos os campos')
            }
        } 
        Administration.createChef(req. body, function(chef) {
            return res.redirect(`admin/chefs/${chef.id}`)
        })
    },
    
    showChef(req, res) {

        Administration.recipesOfChefs(req.params.id, function(recipes) {
            
        Administration.findChef(req.params.id, function(chef) {
            if(!chef) return res.send('Chef not found!')
            
            return res.render('admin/detailChef', { chef, recipes })   

    
            })
        })
        
        
    },
    listChefs(req, res) {
        Administration.allChefs(function(chefs) {

            return res.render('admin/listChefs', { chefs })
        })
    },

    editChef(req, res) {
        Administration.findChef(req.params.id, function(chef) {
            if(!chef) return res.send('Chef not found!')

            return res.render('admin/editChef', { chef })
        })
    },

    deleteChef(req, res) {
        Administration.findChef(req.body.id, function(chef) {
            if(chef.total_recipes >= 1) {
                return res.send(`Chef não pode ser deletado, pois possui ${chef.total_recipes} receitas`)   
            }  
        })
        
        Administration.deleteChef(req.body.id, function() {
            
            return res.redirect('admin/chefs')
        })
    }

   

}