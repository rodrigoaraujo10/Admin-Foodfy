module.exports = {
    index(req, res){
    
        let recipesLimited = []
    
        for(let i = 0; i < 6; i ++) {
            recipesLimited.push(data.recipes[i])
        }
        
        return res.render('./clients/home', {items: recipesLimited})
    
    },
    show(req, res){
        const { index: recipeIndex } = req.params
    
        const recipe = data.recipes[recipeIndex]
    
        if (!recipe) return res.send('Recipe not found')
    
      
    
        return res.render("clients/recipe", { item: recipe})
    },
    list(req, res){
        return res.render('clients/recipes', { items: data.recipes })
    },
    about(req, res) {
        return res.render('clients/about')
    }

}