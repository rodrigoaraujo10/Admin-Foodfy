const express = require ('express')
const routes = express.Router()
const admin = require('./app/controllers/admin')
const clients = require('./app/controllers/clients')

//const recipes = require('./data')

// ============  ROTAS CLIENTES ============

routes.get('/', clients.index)

routes.get('/recipes', clients.list)

routes.get('/recipes/:id', clients.show)

routes.get('/about', clients.about)




routes.get('/chefs', clients.chefs)




// ============  ROTAS ADMIN ============

routes.get("/admin", admin.index) // Mostrar a lista de receitas

routes.get("/admin/recipes/create", admin.create) // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admin.show) // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.edit) // Mostrar formulário de edição de receita

routes.post("/admin", admin.post) // Cadastrar nova receita
routes.put("/admin/recipes", admin.put); // Editar uma receita
routes.delete("/admin/recipes", admin.delete); // Deletar uma receita

// ============ ROTAS CHEFS ============

routes.get("/admin/chefs/create", admin.createChef)
routes.post("/admin/chefs/", admin.postChef)
routes.get("/admin/chefs/:id", admin.showChef)


module.exports = routes